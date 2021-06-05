import React, { useState, useEffect } from "react";
import { View, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { filmList } from "../actions/filmActions";
import FilmItem from "./FilmItem";

function FilmList({ displayDetails }) {
  const dispatch = useDispatch();

  const { loading, error, films } = useSelector((state) => state.filmList);

  useEffect(() => {
    dispatch(filmList("saga"));
  }, []);

  return (
    <View>
      <FlatList
        data={films}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <FilmItem film={item} displayDetails={displayDetails} />
        )}
      />
    </View>
  );
}

export default FilmList;
