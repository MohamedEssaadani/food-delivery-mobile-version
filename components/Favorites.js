import React from "react"
import { FlatList } from "react-native-gesture-handler"
import { useSelector } from "react-redux"
import FilmItem from "./FilmItem"

function Favorites() {
  const { favoritesFilm } = useSelector((state) => state.favorites)

  return (
    <FlatList
      data={favoritesFilm}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <FilmItem film={item} />}
    />
  )
}

export default Favorites
