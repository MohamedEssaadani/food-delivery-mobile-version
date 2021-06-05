import React, { useState, useEffect } from "react";
import { View, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { listRestaurant } from "../actions/restaurantActions";
import RestaurantItem from "./RestaurantItem";

function RestaurantList({ displayDetails }) {
  const dispatch = useDispatch();

  const { loading, error, restaurants } = useSelector(
    (state) => state.restaurantList
  );

  useEffect(() => {
    dispatch(listRestaurant());
  }, []);

  return (
    <View>
      <FlatList
        data={restaurants}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <RestaurantItem restaurant={item} displayDetails={displayDetails} />
        )}
      />
    </View>
  );
}

export default RestaurantList;
