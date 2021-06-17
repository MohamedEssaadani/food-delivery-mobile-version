import React, { useEffect, useRef } from "react";
import {
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { Card, CardItem, Text } from "native-base";
import EnlargeShrink from "../Animations/EnLargeShrink";
import Map from "./Map";
import Reviews from "./Reviews";
import { restaurantDetails } from "../actions/restaurantActions";

function RestaurantDetail({ navigation }) {
  const dispatch = useDispatch();
  const { loading, error, restaurant } = useSelector(
    (state) => state.restaurantDetails
  );

  const playerRef = useRef();

  useEffect(() => {
    dispatch(restaurantDetails(navigation.state.params.restaurantId));
  }, [navigation.state.params.restaurantId]);

  const handleFavorite = () => {
    dispatch({ type: "TOGGLE_FAVORITE", value: film });
  };

  const img = () => {
    switch (restaurant.picture) {
      case "/images/amine_restaurant.jpg":
        return require("../images/amine_restaurant.jpg");
      case "/images/coin_sandwich.jpg":
        return require("../images/coin_sandwich.jpg");
      case "/images/coin_sandwich.jpg":
        return require("../images/coin_sandwich.jpg");
      case "/images/fish_place.jpg":
        return require("../images/fish_place.jpg");
      default:
        return require("../images/fish_place.jpg");
    }
  };

  if (restaurant != undefined) {
    return (
      <ScrollView style={styles.scrollview_container}>
        <Image style={styles.image} source={img()} />

        <Text style={styles.title_text}>{restaurant.name}</Text>

        {/* <TouchableOpacity
          style={styles.favorite_container}
          onPress={handleFavorite}
        >
          <EnlargeShrink
            shouldEnlarge={false}
            style={styles.favorite_container}
          >
            {favoritesFilm.findIndex((item) => item.id === film.id) !== -1 ? (
              <Image
                style={styles.favorite_image}
                source={require("../images/ic_favorite.png")}
              />
            ) : (
              <Image
                style={styles.favorite_image}
                source={require("../images/ic_favorite_border.png")}
              />
            )}
          </EnlargeShrink>
        </TouchableOpacity> */}

        {/* <Reviews filmId={navigation.state.params.idFilm} /> */}

        <Card>
          <CardItem>
            <Text>{restaurant.address}</Text>
          </CardItem>
          <CardItem>
            <Text>{restaurant.description}</Text>
          </CardItem>
        </Card>

        <Map />
      </ScrollView>
    );
  } else {
    return <ActivityIndicator size="large" color="orange" />;
  }
}

export default RestaurantDetail;

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
  },
  loading_container: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  scrollview_container: {
    flex: 1,
  },
  image: {
    height: 169,
    margin: 5,
  },
  title_text: {
    fontWeight: "bold",
    fontSize: 25,
    flex: 1,
    flexWrap: "wrap",
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 10,
    color: "orange",
    textAlign: "center",
  },
  favorite_container: {
    alignItems: "center",
  },
  description_text: {
    fontStyle: "italic",
    color: "#666666",
    margin: 5,
    marginBottom: 15,
  },
  default_text: {
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
    color: "orange",
  },

  favorite_image: {
    flex: 1,
    width: null,
    height: null,
  },
  share_touchable_floatingactionbutton: {
    position: "absolute",
    width: 60,
    height: 60,
    right: 30,
    bottom: 30,
    borderRadius: 30,
    backgroundColor: "#e91e63",
    justifyContent: "center",
    alignItems: "center",
  },
  share_touchable_headerrightbutton: {
    marginRight: 8,
  },
  share_image: {
    width: 30,
    height: 30,
  },
});
