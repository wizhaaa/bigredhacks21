// import React, { Component } from 'react';
// import { Map, GoogleApiWrapper } from 'google-maps-react';

// const mapStyles = {
//   width: '100%',
//   height: '100%'
// };

import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
    height: "100%",
    position: "absolute",
    left: "0",
    marginTop: "-350px",
    width: "100%",
    overflow: "hidden",
};

const center = {
    lat: 42.4603218,
    lng: -76.4910089
};

function MyComponent() {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyCw7YrWr46oZjrbCuXqWhhamYIjoVis3BE"
    >
      <GoogleMap
        
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(MyComponent)

// export class MapContainer extends Component {
//   render() {
//     return (
//       <Map
//         google={this.props.google}
//         //zoom={14}
        
//         initialCenter={
//           {
//             lat: 42.4603218,
//             lng: -76.4910089
//           }
//         }
//       />
//     );
//   }
// }

// export default GoogleApiWrapper({
//   apiKey: 'AIzaSyCw7YrWr46oZjrbCuXqWhhamYIjoVis3BE'
// })(MapContainer);