import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import SearchBar from "../components/SearchBar";
import RestaurantList from "../components/RestaurantList";
import yelp from "../api/yelp";

const SearchScreen = () => {
  const [searchText, setSearchText] = useState("");
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "modesto",
        },
      });
      console.log(response.data);
      setResults(response.data.businesses);
    } catch (e) {
      setResults([]);
      setErrorMessage("Try again later");
    }
  };

  return (
    <View style={styles.container}>
      <SearchBar
        searchText={searchText}
        onChangeSearchText={setSearchText}
        onSearchSubmit={() => searchApi(searchText)}
      />
      <View style={styles.errorView}>
        <Text style={styles.errorText}>{errorMessage}</Text>
      </View>
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
  errorView: {
    marginVertical: 5,
  },
  errorText: {},
});
