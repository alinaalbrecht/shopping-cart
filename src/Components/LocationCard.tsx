import { FaMapMarkerAlt } from "react-icons/fa";

interface LocationCardProps {
  locations: {
    image: string;
    location: string;
    address: string;
    phone: string;
    openingHours: string;
  }[];
}

const LocationCard: React.FC<LocationCardProps> = (props) => {
  return (
    <>
      {props.locations.map((location) => {
        return (
          <div className="product-card">
            <img src={location.image} alt="" />
            <div className="location-info">
              <p className="large-black-text">{location.location}</p>
              <p>
                <FaMapMarkerAlt />
                {location.address}
              </p>
              <p>{location.phone}</p>
              <p>{location.openingHours}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default LocationCard;
