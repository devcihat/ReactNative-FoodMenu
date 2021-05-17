import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp"

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [result, setResult] = useState([]);

  const searchApi = async () => {
    const response = await yelp.get('/search');
  }

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => console.log("submitted")}
      />
      <Text>Search Screen</Text>
      <Text>We have Found {result.length} result</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
