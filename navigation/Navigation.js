import React from "react";
import { StyleSheet, Image } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import Home from "../components/Home";
import RestaurantDetail from "../components/RestaurantDetail";

const HomeStackNavigator = createStackNavigator({
  Home: {
    screen: Home,
    // navigationOptions: {
    //   title: "Home ",
    // },
  },
  RestaurantDetail: {
    screen: RestaurantDetail,
    navigationOptions: {
      title: "Restaurant Detail ",
    },
  },
});

const MoviesTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeStackNavigator,
      navigationOptions: {
        tabBarIcon: () => {
          return (
            <Image source={require("../images/home.png")} style={styles.icon} />
          );
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
);

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
  },
});

export default createAppContainer(MoviesTabNavigator);
