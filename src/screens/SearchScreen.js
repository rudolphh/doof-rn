import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import SearchBar from "../components/SearchBar";
import RestaurantList from "../components/RestaurantList";

const SearchScreen = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <View style={styles.container}>
      <SearchBar
        searchText={searchText}
        onChangeSearchText={(newText) => setSearchText(newText)}
        onSearchSubmit={() => console.log('submitted')}
      />
      <Text>{searchText}</Text>
      <RestaurantList />
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 30,
  },
});
