import { Card, CardItem, Text } from "native-base"
import React from "react"
import { StyleSheet } from "react-native"
import Rating from "./Rating"

function Review({ item }) {
  return (
    <Card>
      <CardItem>
        <Text>Name: {item.name}</Text>
      </CardItem>
      <CardItem>
        <Text>Review: {item.review}</Text>
      </CardItem>
      <CardItem>
        <Text>Rating: </Text>
        <Rating isReviewRating={true} value={item.rating} />
      </CardItem>
    </Card>
  )
}

export default Review

const styles = StyleSheet.create({})
