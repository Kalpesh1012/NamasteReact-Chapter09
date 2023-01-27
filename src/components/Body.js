import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterdata } from "../utils/helper";
import { api_link } from "../config";
import useOnline from "../utils/useNetwork";
const Body = () => {
  const [allrestaurant, setAllRestaurant] = useState([]);
  const [firstname, setfistname] = useState();
  const [searchrestaurant, setSearchRestaurants] = useState([]);

  useEffect(() => {
    fetching();
  }, []);

  async function fetching() {
    const data = await fetch(api_link);
    const json = await data.json();

    setSearchRestaurants(json?.data?.cards?.[2]?.data?.data?.cards);
    setAllRestaurant(json?.data?.cards?.[2]?.data?.data?.cards);
  }

  const offline = useOnline();

  if (!offline) return <h1>Please check your internet connection</h1>;

  if (!allrestaurant) return null;
  return allrestaurant?.length == 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-conatiner">
        <input
          className="search-input"
          type="text"
          placeholder="Search....."
          value={firstname}
          onChange={(event) => {
            setfistname(event.target.value);
          }}
        ></input>
        <button
          className="search-btn"
          onClick={() => {
            const data = filterdata(firstname, allrestaurant);
            setSearchRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="body">
        {searchrestaurant.length > 0 ? (
          searchrestaurant.map((rest) => {
            //console.log(rest);
            return (
              <Link
                className="Restaurant-Link"
                to={"/restuarant/" + rest.data.id}
              >
                <RestaurantCard {...rest.data} key={rest.data.id} />
              </Link>
            );
          })
        ) : (
          <h1>Not Found</h1>
        )}
      </div>
    </>
  );
};

export default Body;
