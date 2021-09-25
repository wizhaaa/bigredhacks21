import React from "react";
import {
  withScriptjs,
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
// https://medium.com/@allynak/how-to-use-google-map-api-in-react-app-edb59f64ac9d
//https://developers.google.com/maps/documentation/javascript/examples/marker-simple
const containerStyle = {
  height: "100%",
  position: "absolute",
  left: "0",
  marginTop: "-350px",
  width: "100%",
  overflow: "hidden",
};

const headingStyle = {
  marginTop: "5px",
};

const center = {
  lat: 29.3269589,
  lng: 52.5600516,
};
const newCenter = {
  lat: 42.4371437,
  lng: -76.5025713,
};

function MapComponent(props) {
  const locations = [
    {
      name: "anchorage",
      text_name: "anchorage",
      location: {
        lat: 61.1083688,
        lng: -150.0006932,
      },
    },
    {
      name: "valencia",
      location: {
        lat: 39.4749771,
        lng: -0.3999656,
      },
    },
    {
      name: "sacramento",
      location: {
        lat: 38.5901974,
        lng: -121.284071,
      },
    },
    {
      name: "brisbane",
      location: {
        lat: -27.3818631,
        lng: 152.7130055,
      },
    },
    {
      name: "brasilia",
      location: {
        lat: -15.7750656,
        lng: -48.0773077,
      },
    },
    {
      name: "nairobi",
      location: {
        lat: -1.3028618,
        lng: 36.7073108,
      },
    },
    {
      name: "kathmandu",
      location: {
        lat: 27.7137312,
        lng: 85.2796358,
      },
    },
    {
      name: "shanghai",
      location: {
        lat: 31.2321265,
        lng: 121.4716187,
      },
    },
  ];
  return (
    <>
      <div>
        <h1 style={headingStyle}>Daytrip</h1>
      </div>
      <LoadScript googleMapsApiKey="AIzaSyCw7YrWr46oZjrbCuXqWhhamYIjoVis3BE">
        <GoogleMap mapContainerStyle={containerStyle} zoom={3} center={center}>
          {locations.map((item) => {
            return (
              <Marker
                key={item.name}
                position={item.location}
                onClick={() => {
                  window.open("/drive#" + item.name);
                }}
              />
            );
          })}
        </GoogleMap>
      </LoadScript>
    </>
  );
}

export default React.memo(MapComponent);
