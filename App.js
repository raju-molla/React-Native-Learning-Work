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
import InputPlace from "./component/InputPlace/InputPlace";
import ListItem from "./component/ListItem/ListItem";
import PlaceList from "./component/PlaceList/PlaceList";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [pleaseList, setPlaseList] = useState([]);

  return (
    <View style={styles.container}>
      <InputPlace
        inputValue={inputValue}
        setInputValue={setInputValue}
        pleaseList={pleaseList}
        setPlaseList={setPlaseList}
      />
      <PlaceList pleaseList={pleaseList} />

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
});
