import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import yelp from "../api/yelp";

const RestaurantDetailsScreen = ({ navigation }) => {
  const id = navigation.getParam("id");
  const [restaurant, setRestaurant] = useState(null);

  const getRestaurant = async (id) => {
    try {
      const response = await yelp.get(`/${id}`);
      console.log(response.data);
      setRestaurant(response.data);
    } catch (err) {
      setRestaurant(null);
    }
  };

  useEffect(() => {
    getRestaurant(id);
  }, []);

  return !restaurant ? null : (
    <View>
      <Text>{restaurant.name}</Text>
      <FlatList
        numColumns={1}
        data={restaurant.photos}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
    </View>
  );
};

export default RestaurantDetailsScreen;

const styles = StyleSheet.create({
  image: {
    height: 300,
    marginHorizontal: 15,
    marginBottom: 15
  },
});
