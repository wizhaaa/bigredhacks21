
import React from 'react'
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
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

const center = {
    lat: 29.3269589,
    lng: 52.5600516,
};

function MapComponent(props) {
  const locations = [
    {
      name: "Barcelona",
      location: { 
        lat: 41.3925564,
        lng: 2.1660364 
      },
      url: "www.google.co"
    },
    {
      name: "Sacramento",
      location: { 
        lat: 38.5901974,
        lng: -121.284071
      },
    },
    {
      name: "Seoul",
      location: { 
        lat: 37.5640455,
        lng: 126.834002
      },
    },
    {
      name: "Brasilia",
      location: { 
        lat: -15.7750656,
        lng: -48.0773077
      },
    },
    {
      name: "Nairobi",
      location: { 
        lat: -1.3028618,
        lng: 36.7073108
      },
    },
    {
      name: "Kathmandu",
      location: { 
        lat: 27.7137312,
        lng: 85.2796358
      },
    }

  ];
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyCw7YrWr46oZjrbCuXqWhhamYIjoVis3BE"
    >
      <GoogleMap
          mapContainerStyle={containerStyle}
          zoom={3}
          center={center}>
         {
            locations.map(item => {
              return (
              <Marker key={item.name} position={item.location}/>
              )
            })
         }
     </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(MapComponent)

