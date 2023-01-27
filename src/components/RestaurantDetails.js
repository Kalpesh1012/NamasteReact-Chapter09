import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IMG_CDN_LINK } from "../config";
import Shimmer from "./Shimmer";
import useRestaurantDetails from "../utils/useRestaurantDetails";

const RestaurantDetails = () => {
  const { uniqueid } = useParams();

  const restaurantdetail = useRestaurantDetails(uniqueid);
  return !restaurantdetail ? (
    <Shimmer />
  ) : (
    <>
      <div className="Restaurant-Details">
        <div className="Resuarant-Search">
          <img src={IMG_CDN_LINK + restaurantdetail.cloudinaryImageId} />
          <h1>{restaurantdetail.name}</h1>
          <h3>City:{restaurantdetail.city}</h3>
          <h3>Area:{restaurantdetail.area}</h3>
          <h3>{restaurantdetail.avgRating} Rating</h3>
        </div>
        <div className="Menu-Bar">
          <h2>Menu</h2>
          <ul>
            {Object.values(restaurantdetail.menu.items).map((items) => {
              return <li key={items.id}>{items.name}</li>;
            })}
          </ul>
        </div>
      </div>
    </>
  );
};
export default RestaurantDetails;
