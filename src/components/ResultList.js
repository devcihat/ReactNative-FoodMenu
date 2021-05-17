import React from "react";
import { View, Text, StyleSheet,FlatList,TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation"
import ResultDetail from "../components/ResultDetail"


const ResultList = ({ title, result,navigation }) => {

    if(!result.length) {
        return null
    }

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
                <TouchableOpacity onPress={() => navigation.navigate('ResultShow', {
                    id:item.id
                }) }>
               <ResultDetail result={item} />
               </TouchableOpacity>
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

export default withNavigation(ResultList);
