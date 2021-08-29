import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import RestaurantList from "../components/RestaurantsList";
import useRestaurants from "../hooks/useRestaurants";

const SearchScreen = () => {
  const [searchText, setSearchText] = useState("");
  const [searchApi, restaurants, errorMessage] = useRestaurants();

  const filterRestaurantsByPrice = (price) => {
    return restaurants.filter(
      (restaurant) => restaurant.price && restaurant.price === price
    );
  };

  return (
    <View style={styles.container}>
      <SearchBar
        searchText={searchText}
        onChangeSearchText={setSearchText}
        onSearchSubmit={() => searchApi(searchText)}
      />

      {errorMessage.length > 0 ? (
        <Text style={styles.errorText}>{errorMessage}</Text>
      ) : null}
      {errorMessage.length === 0 ? (
        <ScrollView>
          <RestaurantList
            title="Cost Effective"
            restaurants={filterRestaurantsByPrice("$")}
          />

          <View style={styles.horizontal} />

          <RestaurantList
            title="Bit Pricier"
            restaurants={filterRestaurantsByPrice("$$")}
          />

          <View style={styles.horizontal} />

          <RestaurantList
            title="Big Spender"
            restaurants={filterRestaurantsByPrice("$$$")}
          />
        </ScrollView>
      ) : null}
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1
  },
  errorText: {
    marginTop: 3,
  },
  horizontal: {
    borderBottomColor: "lightgray",
    borderBottomWidth: 1,
    width: "100%",
    marginLeft: 15,
    marginBottom: 15
  },
});
