import React, { useEffect, useRef } from "react"
import {
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { getImageFromApi } from "../API/TMDB"
import { filmDetail, toggleFavoriteAction } from "../actions/filmActions"
import moment from "moment"
import { Card, CardItem, Text } from "native-base"
import EnlargeShrink from "../Animations/EnLargeShrink"
import Map from "./Map"
import Reviews from "./Reviews"
import YoutubePlayer from "react-native-youtube-iframe"

export default function FilmDetails({ navigation }) {
  const dispatch = useDispatch()
  const { loading, error, film } = useSelector((state) => state.film)
  const { favoritesFilm } = useSelector((state) => state.favorites)

  const playerRef = useRef()

  useEffect(() => {
    dispatch(filmDetail(navigation.state.params.idFilm))
  }, [navigation.state.params.idFilm, favoritesFilm])

  const handleFavorite = () => {
    dispatch({ type: "TOGGLE_FAVORITE", value: film })
  }

  const checkForTime = () => {
    playerRef.current
      ?.getCurrentTime()
      .then((currentTime) =>
        console.log("Video Time View:" + { currentTime }.currentTime)
      )
  }

  if (film != undefined) {
    return (
      <ScrollView style={styles.scrollview_container}>
        {film.videos.results[0].key ? (
          <YoutubePlayer
            ref={playerRef}
            onChangeState={checkForTime}
            height={300}
            play={false}
            videoId={film.videos.results[0].key}
          />
        ) : (
          <Image
            style={styles.image}
            source={{ uri: getImageFromApi(film.backdrop_path) }}
          />
        )}

        <Text style={styles.title_text}>{film.title}</Text>

        <TouchableOpacity
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
                source={require("../Images/ic_favorite.png")}
              />
            ) : (
              <Image
                style={styles.favorite_image}
                source={require("../Images/ic_favorite_border.png")}
              />
            )}
          </EnlargeShrink>
        </TouchableOpacity>

        <Reviews filmId={navigation.state.params.idFilm} />

        <Card>
          <CardItem>
            <Text>{film.overview}</Text>
          </CardItem>
          <CardItem>
            <Text style={{ color: "orange" }}>
              Sorti le :
              {moment(new Date(film.release_date)).format("DD/MM/YYYY")}
            </Text>
          </CardItem>
          <CardItem>
            <Text style={{ color: "orange" }}>
              Note : {film.vote_average} / 10
            </Text>
          </CardItem>
          <CardItem>
            <Text style={{ color: "orange" }}>
              Nombre de votes : {film.vote_count}
            </Text>
          </CardItem>
          <CardItem>
            <Text style={{ color: "orange" }}>Budget : ${film.budget}</Text>
          </CardItem>
          <CardItem>
            <Text style={{ color: "orange" }}>
              Genre(s) : {film.genres.map((genre) => genre.name).join(" / ")}
            </Text>
          </CardItem>
          <CardItem>
            <Text style={{ color: "orange" }}>
              Companie(s) :{" "}
              {film.production_companies
                .map((company) => company.name)
                .join(" / ")}
            </Text>
          </CardItem>
        </Card>

        <Map />
      </ScrollView>
    )
  } else {
    return <ActivityIndicator size="large" color="orange" />
  }
}

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
})
