import React, { useState } from "react";
import { View, Text, StyleSheet,ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResult from "../hooks/useResult";
import ResultList from "../components/ResultList"

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, result, errorMessage] = useResult();

  const filterResultByPrice = (price) => {
    return result.filter (result => {
        return result.price === price
    });
  };

  // call searchApi when component
  // is first rendered.
  //searchApi('pasta')

  return (
    <View style={{ flex:1}}>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have Found {result.length} result</Text>
      <ScrollView>
      <ResultList result={filterResultByPrice('$')} title="Cost Effective" />
      <ResultList result={filterResultByPrice('$$')} title="Bit Pricier" />
      <ResultList result={filterResultByPrice('$$')} title="Big Spender" />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({

});

export default SearchScreen;
