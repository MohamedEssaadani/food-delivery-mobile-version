import axios from "axios"
import { Card, CardItem, Input, Left, Right, Text, View } from "native-base"
import React, { useEffect, useState } from "react"
import { StyleSheet, FlatList } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import Review from "./Review"

function Reviews({ filmId }) {
  const [reviews, setReviews] = useState([])
  const [name, setName] = useState("")
  const [review, setReview] = useState("")
  const [rating, setRating] = useState(0)
  const [showAddReviewForm, setShowAddReviewForm] = useState(false)

  useEffect(() => {
    //Fetch Reviews from back end
    const fetchReviews = async () => {
      const { data } = await axios.get(
        `http://192.168.1.8:5000/api/reviews/${filmId}`
      )
      setReviews(data)
    }
    fetchReviews()
  }, [])

  const handleSubmit = async () => {
    const { data } = await axios.post("http://192.168.1.8:5000/api/reviews", {
      filmId,
      name,
      review,
      rating,
    })
    setReviews((prevReviews) => {
      return [...prevReviews, data]
    })
    setShowAddReviewForm(false)
  }

  return (
    <View>
      <Card>
        <CardItem>
          <Left>
            <Text style={{ color: "orange", margin: 10, fontWeight: "bold" }}>
              Reviews:
            </Text>
          </Left>
          <Right>
            <TouchableOpacity
              style={styles.touchable}
              onPress={() => setShowAddReviewForm(true)}
            >
              <Text style={{ color: "#fff" }}>Add Review</Text>
            </TouchableOpacity>
          </Right>
        </CardItem>
        {showAddReviewForm && (
          <View>
            <CardItem>
              <Input
                placeholder="Enter your Name"
                onChangeText={(text) => setName(text)}
              />
            </CardItem>

            <CardItem>
              <Input
                placeholder="Enter your Review"
                onChangeText={(text) => setReview(text)}
              />
            </CardItem>
            <CardItem>
              <Input
                placeholder="Enter your Rating"
                onChangeText={(text) => setRating(text)}
              />
            </CardItem>
            <CardItem>
              <TouchableOpacity style={styles.touchable} onPress={handleSubmit}>
                <Text style={{ color: "#fff" }}>Submit</Text>
              </TouchableOpacity>
            </CardItem>
          </View>
        )}
        <FlatList
          data={reviews}
          keyExtractor={(item) => item._id.toString()}
          renderItem={({ item }) => <Review item={item} />}
        />
      </Card>
    </View>
  )
}

export default Reviews

const styles = StyleSheet.create({
  touchable: {
    padding: 10,
    backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderRadius: 10,
  },
})
