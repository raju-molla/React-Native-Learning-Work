import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList,
} from "react-native";
import ListItem from "./component/ListItem/ListItem";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [pleaseList, setPlaseList] = useState([]);

  return (
    <View style={styles.container}>
      <View style={styles.inputView}>
        <TextInput
          style={{
            width: "80%",
            borderBottomWidth: 1,
            borderColor: "green",
            padding: 7,
          }}
          placeholder="add a please"
          value={inputValue}
          onChangeText={(text) => setInputValue(text)}
        />
        <Button
          title="Add"
          onPress={() => {
            if (inputValue != "") {
              setPlaseList([
                ...pleaseList,
                { key: Math.random().toString(), value: inputValue },
              ]);
            }
          }}
        />
      </View>
      <FlatList
        style={{
          width: "100%",
        }}
        data={pleaseList}
        renderItem={(info) => {
          return (
            <ListItem
              placeName={info.item.value}
              onItemPressed={() => alert(info.item.value)}
            />
          );
        }}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "column",
  },
  inputView: {
    padding: 20,
    width: "100%",
    marginTop: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
