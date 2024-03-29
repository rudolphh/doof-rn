import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ searchText, onChangeSearchText, onSearchSubmit }) => {

  return (
    <View style={styles.container}>
      <Feather style={styles.icon} name="search" size={30} color="black" />
      <TextInput
        style={styles.searchText}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Search"
        value={searchText}
        onChangeText={onChangeSearchText}
        onEndEditing={onSearchSubmit}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F0EEEE",
    borderRadius: 5,
    height: 45,
    marginTop: 15,
    marginBottom: 15,
    marginHorizontal: 15,
    paddingHorizontal: 10,
    flexDirection: "row",
  },
  searchText: {
    fontSize: 18,
    marginLeft: 10,
    flex: 1,
  },
  icon: {
    alignSelf: "center",
  },
});
