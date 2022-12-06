import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

const CustomMap = ({ google, locations = [], userLocation }) => {
  const defaultProps = {
    center: { lat: 40.73, lng: -73.93 },
    zoom: 12,
  };

  console.log(userLocation);
  return (
    <div>
      <Map
        google={google}
        containerStyle={{
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
        style={{
          width: "100%",
          height: "100%",
        }}
        center={userLocation}
        initialCenter={userLocation}
        zoom={locations.length === 1 ? 18 : 13}
        disableDefaultUI={true}
      >
        {locations.map((coords) => (
          <Marker key={`${coords.lat} + ${coords.long}`} position={coords} />
        ))}
      </Map>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyCDxxlvYtaIZNmTaAG-SWyr3kLF7cEvuf4",
})(CustomMap);
