import axios from "axios"
import React from "react"
import MapView from "react-native-maps"

export default class Map extends React.Component {
  state = {
    currentLongitude: 0,
    currentLatitude: 0,
    cinemaName: "",
    megaramaLongitude: 0,
    megaramaLatitude: 0,
  }
  componentDidMount = () => {
    navigator.geolocation.getCurrentPosition(
      //Will give you the current location
      (position) => {
        //getting the Latitude from the location json
        this.setState({ currentLongitude: position.coords.longitude })
        //Setting state Longitude to re re-render the Longitude Text
        this.setState({ currentLatitude: position.coords.latitude })
        //Setting state Latitude to re re-render the Longitude Text
      }
    )

    axios.get("http://192.168.1.8:5000/api/cinemas/Megarama").then((res) => {
      console.log(res.data)
      //cinema longitude from back end
      this.setState({ megaramaLongitude: res.data.longitude })
      //cinema latitude from back end
      this.setState({ megaramaLatitude: res.data.latitude })
      //cinema name from back end
      this.setState({ cinemaName: res.data.name })
    })
  }

  render() {
    return (
      <MapView style={{ width: 360, height: 200 }}>
        <MapView.Marker
          coordinate={{
            latitude: this.state.currentLatitude,
            longitude: this.state.currentLongitude,
          }}
          title={"Your Place"}
        />
        <MapView.Marker
          coordinate={{
            // latitude: 33.59602876922195,
            // longitude: -7.668161985123069,
            latitude: this.state.megaramaLatitude,
            longitude: this.state.megaramaLongitude,
          }}
          title={this.state.cinemaName}
        />
      </MapView>
    )
  }
}
