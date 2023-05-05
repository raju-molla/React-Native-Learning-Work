import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
const ListItem = (props) => {
  return (
    <TouchableOpacity onPress={props.onItemPressed}>
      <View style={styles.listItem}>
        <Image
          source={props.image}
          style={{ height: 50, width: "20%", flexDirection: "row" }}
        />
        <Text style={{paddingLeft:20}}>{props.placeName}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    width: "100%",
    padding: 10,
    backgroundColor: "#eee",
    margin: 5,
    flexDirection:'row'
  },
});

export default ListItem;
