import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { withNavigation } from "react-navigation";
import RestaurantDetail from "./RestaurantDetail";

const RestaurantList = ({ title, restaurants, navigation }) => {
  return !restaurants.length ? null : (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        style={styles.list}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={restaurants}
        renderItem={({ item }) => {
          if (item.image_url === "") console.log(item.name);
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("RestaurantDetails", { id: item.id });
              }}
            >
              <RestaurantDetail restaurant={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default withNavigation(RestaurantList);

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 15,
  },
  list: {
    marginTop: 5,
  },
});
