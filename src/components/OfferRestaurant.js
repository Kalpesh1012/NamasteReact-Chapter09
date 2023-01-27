import { IMG_CDN_LINK } from "../config";

const OfferRestaurant = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravel,
  avgRating,
  aggregatedDiscountInfo,
}) => {
  return (
    <div className="cards">
      <img src={IMG_CDN_LINK + cloudinaryImageId} />
      <h2>{name}</h2>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{lastMileTravel} minutes</h4>
      <h4 className="discount">
        {aggregatedDiscountInfo.descriptionList[0].meta}
      </h4>
    </div>
  );
};
export default OfferRestaurant;
