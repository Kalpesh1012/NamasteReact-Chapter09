import { useEffect, useState } from "react";
import OfferRestaurant from "./components/OfferRestaurant";
import { Link } from "react-router-dom";
import Shimmer from "./components/Shimmer";

const Offer = () => {
  const [x, setX] = useState([]);
  useEffect(() => {
    res();
  }, []);

  async function res() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/offers/restaurant?lat=21.1651678&lng=72.84010099999999&offset=0"
    );
    const json = await data.json();
    console.log(json.data.cards);
    setX(json.data.cards);
  }
  if (!x) return null;
  return (
    <div className="offer-searchs">
      {x.length === 0 ? (
        <Shimmer />
      ) : (
        x
          .filter(function (restoi) {
            return restoi.cardType === "restaurant";
          })
          .map(function (restoi) {
            return (
              <>
                <Link
                  className="Restaurant-Link"
                  to={"/restuarant/" + restoi.data.data.id}
                >
                  <OfferRestaurant {...restoi.data.data} />
                </Link>
              </>
            );
          })
      )}
    </div>
  );
};
export default Offer;
