import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const RestaurantDetail = ({ restaurant }) => {
  return (
    <View style={styles.restaurantItem}>
      <Image
        style={styles.restaurantImage}
        source={{
          uri:
            restaurant.image_url !== ""
              ? restaurant.image_url
              : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk7E4ipGydp4redX_sIXutVU-Wywwcwx1pLg&usqp=CAU",
        }}
      />
      <Text numberOfLines={1} style={styles.restaurantName}>
        {restaurant.name}
      </Text>
      <Text style={styles.rating}>
        {restaurant.rating.toFixed(1)} Stars, {restaurant.review_count} Reviews
      </Text>
    </View>
  );
};

export default RestaurantDetail;

const styles = StyleSheet.create({
  restaurantItem: {
    width: 270,
    marginLeft: 15
  },
  restaurantImage: {
    width: "100%",
    height: 135,
    borderRadius: 4
  },
  restaurantName: {
    fontWeight: "bold",
    marginTop: 5,
  },
  rating: { color: "darkgray", fontWeight: "bold" },
});
