// import React, { useEffect, useState } from "react"
// import Search from "./Search"
// import FilmList from "./FilmList"
// import { getFilmsByText } from "../API/TMDB"
// import { View, Text } from "react-native"
// import { useDispatch, useSelector } from "react-redux"
// import { filmList } from "../actions/filmActions"

// function Home({ navigation }) {
//   const [filmData, setFilmData] = useState([])

//   const displayDetails = (id) => {
//     navigation.navigate("FilmDetail", { idFilm: id })
//   }

//   return (
//     <View>
//       <Search />
//       {/* {error ? (
//         <Text>Error</Text>
//       ) : loading ? (
//         <Text>Loading</Text>
//       ) : films ? (
//         <FilmList filmData={films} displayDetails={displayDetails} />
//       ) : (
//         <Text>No Films To Show!</Text>
//       )} */}
//       <FilmList displayDetails={displayDetails} />
//     </View>
//   )
// }

// export default Home

import React, { useEffect, useState } from "react";
import Search from "./Search";
import RestaurantsList from "./RestaurantsList";
import { getFilmsByText } from "../API/TMDB";
import { View, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { filmList } from "../actions/filmActions";

function Home({ navigation }) {
  const displayDetails = (id) => {
    navigation.navigate("RestaurantDetail", { id: id });
  };

  return (
    <View>
      <RestaurantsList displayDetails={displayDetails} />
    </View>
  );
}

export default Home;
