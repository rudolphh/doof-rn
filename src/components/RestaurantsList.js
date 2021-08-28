import React from "react";
import { StyleSheet, Text, View, FlatList, Image } from "react-native";

const RestaurantList = ({ title, restaurants }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        style={styles.list}
        horizontal
        data={restaurants}
        renderItem={({ item }) => {
          if (item.image_url === "") console.log(item.name);
          return (
            <View style={styles.restaurantItem}>
              <Image
                style={styles.restaurantImage}
                source={{
                  uri:
                    item.image_url !== ""
                      ? item.image_url
                      : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk7E4ipGydp4redX_sIXutVU-Wywwcwx1pLg&usqp=CAU",
                }}
              />
              <Text
                numberOfLines={1}
                style={styles.restaurantName}
              >
                {item.name}
              </Text>
              <Text style={styles.rating}>
                4.5 Stars, 932 Reviews
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default RestaurantList;

const styles = StyleSheet.create({
  container: {
    height: 240,
    marginTop: 15
  },
  title : {
    fontSize: 24, fontWeight: "bold" 
  },
  list: {
    marginTop: 5,
  },
  restaurantItem: {
    width: 270,
    marginRight: 30,
  },
  restaurantImage: {
    width: "100%",
    height: 135,
  },
  restaurantName: {
    fontWeight: "bold", marginTop: 5 
  },
  rating: { color: "darkgray", fontWeight: "bold" }
});
