import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

const CustomMap = ({ google, locations = [], userLocation }) => {
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
        zoom={13}
        disableDefaultUI={true}
      >
        {locations.map((coords, index) => (
          <Marker
            key={`${coords.lat} + ${coords.long} + ${index}`}
            position={coords}
          />
        ))}
      </Map>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyCDxxlvYtaIZNmTaAG-SWyr3kLF7cEvuf4",
})(CustomMap);
