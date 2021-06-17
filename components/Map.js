import React from "react";
import MapView from "react-native-maps";

export default class Map extends React.Component {
  state = {
    name: "",
  };
  componentDidMount = () => {
    navigator.geolocation.getCurrentPosition(
      //Will give you the current location
      (position) => {
        //getting the Latitude from the location json
        this.setState({ currentLongitude: position.coords.longitude });
        //Setting state Longitude to re re-render the Longitude Text
        this.setState({ currentLatitude: position.coords.latitude });
        //Setting state Latitude to re re-render the Longitude Text
      }
    );
  };

  render() {
    return (
      <MapView style={{ width: 420, height: 200 }}>
        <MapView.Marker
          coordinate={{
            latitude: 33.542637,
            longitude: -7.6750908,
          }}
          title={"Restaurant"}
        />
      </MapView>
    );
  }
}
