import "./searchItem.css";

// Sample hotel data
const hotels = [
  {
    id: 1,
    imgSrc: "https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1",
    title: "Tower Street Apartments",
    distance: "500m from center",
    taxiOp: "Free airport taxi",
    subtitle: "Studio Apartment with Air conditioning",
    features: "Entire studio • 1 bathroom • 21m² 1 full bed",
    cancelOp: "Free cancellation",
    cancelOpSubtitle: "You can cancel later, so lock in this great price today!",
    rating: "Excellent",
    ratingValue: 8.9,
    price: "$112",
  },
  {
    id: 2,
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI3pQ01vSoQ1vhqeGM2Z7ehh3rTbE-NNuuXw&s",
    title: "Hotel Sunflower",
    distance: "1km from center",
    taxiOp: "Free shuttle service",
    subtitle: "Deluxe Room with Garden View",
    features: "1 bedroom • 1 bathroom • 25m² 1 queen bed",
    cancelOp: "Free cancellation",
    cancelOpSubtitle: "You can cancel later, so lock in this great price today!",
    rating: "Very Good",
    ratingValue: 8.5,
    price: "$150",
  },
  {
    id: 3,
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_ahTZb5EIFnK1Bei5JzST_cxHaHw0X2WtXg&s",
    title: "City Central Hotel",
    distance: "300m from center",
    taxiOp: "Complimentary airport transfer",
    subtitle: "Standard Room with City View",
    features: "1 bedroom • 1 bathroom • 20m² 1 double bed",
    cancelOp: "Free cancellation",
    cancelOpSubtitle: "You can cancel later, so lock in this great price today!",
    rating: "Good",
    ratingValue: 7.8,
    price: "$90",
  },
];

const SearchItem = () => {
  return (
    <div className="searchItems">
      {hotels.map((hotel) => (
        <div key={hotel.id} className="searchItem"> {/* Each hotel rendered only once */}
          <img src={hotel.imgSrc} alt={hotel.title} className="siImg" />
          <div className="siDesc">
            <h1 className="siTitle">{hotel.title}</h1>
            <span className="siDistance">{hotel.distance}</span>
            <span className="siTaxiOp">{hotel.taxiOp}</span>
            <span className="siSubtitle">{hotel.subtitle}</span>
            <span className="siFeatures">{hotel.features}</span>
            <span className="siCancelOp">{hotel.cancelOp}</span>
            <span className="siCancelOpSubtitle">{hotel.cancelOpSubtitle}</span>
          </div>
          <div className="siDetails">
            <div className="siRating">
              <span>{hotel.rating}</span>
              <button>{hotel.ratingValue}</button>
            </div>
            <div className="siDetailTexts">
              <span className="siPrice">{hotel.price}</span>
              <span className="siTaxOp">Includes taxes and fees</span>
              <button className="siCheckButton">See availability</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchItem;