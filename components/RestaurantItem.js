import { Card, CardItem } from "native-base";
import React from "react";
import { StyleSheet, TouchableOpacity, Text, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import EnlargeShrink from "../Animations/EnLargeShrink";
import Rating from "./Rating";

function RestaurantItem({ restaurant, displayDetails }) {
  const dispatch = useDispatch();
  const { favoritesFilm } = useSelector((state) => state.favorites);

  // const handleFavorite = () => {
  //   dispatch({ type: "TOGGLE_FAVORITE", value: film })
  // }

  return (
    <ScrollView>
      <Card>
        <CardItem>
          <Text style={styles.title_text}>{restaurant.name}</Text>
          <TouchableOpacity
            style={styles.favorite_container}
            // onPress={handleFavorite}
          >
            <EnlargeShrink
              shouldEnlarge={false}
              style={styles.favorite_container}
            >
              <Image
                style={styles.favorite_image}
                source={require("../Images/ic_favorite_border.png")}
              />
            </EnlargeShrink>
          </TouchableOpacity>
        </CardItem>
        <CardItem cardBody style={{ justifyContent: "center" }}>
          <TouchableOpacity onPress={() => displayDetails(restaurant._id)}>
            <Image style={styles.image} src={restaurant.picture} />
          </TouchableOpacity>
        </CardItem>
        <CardItem>
          <Text style={styles.description_text} numberOfLines={6}>
            {restaurant.address}
          </Text>
        </CardItem>
        <CardItem>
          <Rating value={restaurant.rating} />
        </CardItem>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 120,
    height: 180,
    margin: 5,
  },
  content_container: {
    flex: 1,
    margin: 5,
  },
  header_container: {
    flex: 3,
    flexDirection: "row",
  },
  title_text: {
    fontWeight: "bold",
    fontSize: 20,
    flex: 1,
    flexWrap: "wrap",
    paddingRight: 5,
    color: "orange",
  },
  vote_text: {
    fontWeight: "bold",
    fontSize: 26,
    color: "#666666",
  },
  description_container: {
    flex: 7,
  },
  description_text: {
    fontStyle: "italic",
    color: "#666666",
    justifyContent: "space-between",
  },
  date_container: {
    flex: 1,
  },
  date_text: {
    fontSize: 14,
    color: "orange",
  },
  favorite_container: {
    alignItems: "center",
  },
  favorite_image: {
    flex: 1,
    width: null,
    height: null,
  },
});

export default RestaurantItem;
