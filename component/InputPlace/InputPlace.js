import React from "react";
import { View, Text, Button, TextInput, StyleSheet } from "react-native";

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
      <Button
        title="Add"
        onPress={() => {
          if (props.inputValue != "") {
            props.setPlaseList([
              ...props.pleaseList,
              { key: Math.random().toString(), value: props.inputValue },
            ]);
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
