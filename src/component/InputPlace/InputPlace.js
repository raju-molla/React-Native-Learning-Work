import React from "react";
import { View, Text, Button, TextInput, StyleSheet } from "react-native";

import myImage from "../../../assets/images/test.jpeg";
import CustomButton from "../Button/CustomButtom";

const InputPlace = (props) => {
  return (
    <View style={styles.inputView}>
      <TextInput
        style={{
          width: "80%",
          borderBottomWidth: 1,
          borderColor: "green",
          padding: 7,
        }}
        placeholder="add a please"
        value={props.inputValue}
        onChangeText={(text) => props.setInputValue(text)}
      />

      <CustomButton
        color="green"
        title="Add"
        onPress={() => {
          if (props.inputValue != "") {
            props.addPlace({
              key: Math.random().toString(),
              value: props.inputValue,
              image: myImage,
            });
            props.setInputValue("");
          }
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputView: {
    padding: 20,
    width: "100%",
    marginTop: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default InputPlace;
