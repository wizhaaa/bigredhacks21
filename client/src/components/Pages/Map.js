import React from "react";
import {
  withScriptjs,
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";

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
      name: "seoul",
      location: {
        lat: 37.5636203,
        lng: 126.4136405,
      },
    },
    {
      name: "tokyo",
      location: {
        lat: 35.4928439,
        lng: 137.5207362,
      },
    },
    {
      name: "newyork",
      location: {
        lat: 40.7164064,
        lng: -74.1620723,
      },
    },
    {
      name: "sanfrancisco",
      location: {
        lat: 37.7723053,
        lng: -122.4612352,
      },
    },
    {
      name: "chongqing",
      location: {
        lat: 29.5546171,
        lng: 106.2676765,
      },
    },
    {
      name: "delhi",
      location: {
        lat: 28.6466758,
        lng: 76.8123858,
      },
    },
    {
      name: "cairo",
      location: {
        lat: 30.0594838,
        lng: 31.223359,
      },
    },
    {
      name: "mexicocity",
      location: {
        lat: 19.3906797,
        lng: -99.2840423,
      },
    },
    {
      name: "london",
      location: {
        lat: 51.5283063,
        lng: -0.3824635,
      },
    },
    {
      name: "chicago",
      location: {
        lat: 41.8333908,
        lng: -88.0128349,
      },
    },
    {
      name: "paris",
      location: {
        lat: 48.8588335,
        lng: 2.2768237,
      },
    },
    {
      name: "dubai",
      location: {
        lat: 25.0757582,
        lng: 54.9468678,
      },
    },
    {
      name: "lagos",
      location: {
        lat: 6.5480356,
        lng: 3.1435293,
      },
    },
    {
      name: "taipei",
      location: {
        lat: 25.08534,
        lng: 121.421072,
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
                  window.location = "/drive#" + item.name;
                  return <Redirect to={"/drive#" + item.name} />;
                }}
              >
                {" "}
              </Marker>
            );
          })}
        </GoogleMap>
      </LoadScript>
    </>
  );
}

export default React.memo(MapComponent);
