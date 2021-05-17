import React from "react";
import { View, Text, StyleSheet,FlatList,Image } from "react-native";
import ResultDetail from "../components/ResultDetail"


const ResultList = ({ title, result }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.listText}>{title}</Text>
      {/* <Text>Result: {result.length}</Text> */}
      <FlatList 
        horizontal
        showsHorizontalScrollIndicator={false}
        data={result}
        keyExtractor={(result) => result.id}
        renderItem={({item}) => {
            return (
               <ResultDetail result={item} />
            )
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listText: {
    fontWeight: "bold",
    fontSize: 18,
    marginLeft:15,
    marginBottom:5
  },
  container: {
    marginBottom:10
  }
});

export default ResultList;
