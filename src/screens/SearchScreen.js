import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import SearchBar from "../components/SearchBar";
import RestaurantList from "../components/RestaurantsList";
import useRestaurants from "../hooks/useRestaurants";

const SearchScreen = () => {
  const [searchText, setSearchText] = useState("");
  const [searchApi, restaurants, errorMessage] = useRestaurants();

  const filterRestaurantsByPrice = (price) => {
    return restaurants.filter(
        (restaurant) => restaurant.price && (restaurant.price === price)
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
      <View style={{ marginVertical: 3 }}></View>
      {errorMessage.length === 0 ? (
        <>
          <RestaurantList
            title="Cost Effective"
            restaurants={filterRestaurantsByPrice('$')}
          />
          <View
            style={{
              borderBottomColor: "lightgray",
              borderBottomWidth: 1,
              width: "100%"
            }}
          />
          <RestaurantList
            title="Bit Pricier"
            restaurants={filterRestaurantsByPrice("$$")}
          />
          <View
            style={{
              borderBottomColor: "lightgray",
              borderBottomWidth: 1,
              width: "100%"
            }}
          />
          <RestaurantList
            title="Big Spender"
            restaurants={filterRestaurantsByPrice('$$$')}
          />
        </>
      ) : null}
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    paddingLeft: 25,
    alignItems: 'flex-start'
  },
  errorText: {
    marginTop: 3,
  },
});
