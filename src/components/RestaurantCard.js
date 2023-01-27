import { IMG_CDN_LINK } from "../config";

const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravel,
  avgRating,
}) => {
  return (
    <div className="card">
      <img src={IMG_CDN_LINK + cloudinaryImageId} />
      <h2>{name}</h2>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{lastMileTravel} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
