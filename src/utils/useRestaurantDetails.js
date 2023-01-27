import { useState, useEffect } from "react";

const useRestaurantDetails = (uniqueid) => {
  const [restaurantdetail, setRestaurantDetail] = useState(null);
  useEffect(() => {
    getrestaurant();
  }, []);
  async function getrestaurant() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/v4/full?lat=21.1651678&lng=72.84010099999999&menuId=" +
        uniqueid
    );
    const json = await data.json();
    console.log(json.data);
    setRestaurantDetail(json.data);
  }
  return restaurantdetail;
};
export default useRestaurantDetails;
