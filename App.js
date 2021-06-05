import React from "react"
import { View, StyleSheet, Text } from "react-native"
import Navigation from "./navigation/Navigation"
import { Provider } from "react-redux"
import store from "./store/store"

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  )
}

const styles = StyleSheet.create({})
