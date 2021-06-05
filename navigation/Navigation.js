import React from "react"
import { StyleSheet, Image } from "react-native"
import { createAppContainer } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack"
import { createBottomTabNavigator } from "react-navigation-tabs"
import Favorites from "../components/Favorites"
import FilmDetail from "../components/FilmDetails"
import Home from "../components/Home"

const HomeStackNavigator = createStackNavigator({
  Home: {
    screen: Home,
    // navigationOptions: {
    //   title: "Home ",
    // },
  },
  FilmDetail: {
    screen: FilmDetail,
    navigationOptions: {
      title: "Film Detail ",
    },
  },
})

const FavoritesStackNavigator = createStackNavigator({
  Favorites: {
    screen: Favorites,
    navigationOptions: {
      title: "Favoris",
    },
  },
  FilmDetail: {
    screen: FilmDetail,
  },
})

const MoviesTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeStackNavigator,
      navigationOptions: {
        tabBarIcon: () => {
          return (
            <Image source={require("../Images/home.png")} style={styles.icon} />
          )
        },
      },
    },
    favorites: {
      screen: FavoritesStackNavigator,
      navigationOptions: {
        tabBarIcon: () => {
          return (
            <Image
              source={require("../Images/ic_favorite.png")}
              style={styles.icon}
            />
          )
        },
      },
    },
  },
  {
    tabBarOptions: {
      activeBackgroundColor: "#DDDDDD",
      inactiveBackgroundColor: "#FFFFFF",
      showLabel: false,
      showIcon: true,
    },
  }
)

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
  },
})

export default createAppContainer(MoviesTabNavigator)
