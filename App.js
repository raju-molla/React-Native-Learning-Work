import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import InputPlace from "./component/InputPlace/InputPlace";
import PlaceDetail from "./component/PlaceDetail/PlaceDetail";

import PlaceList from "./component/PlaceList/PlaceList";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [pleaseList, setPlaseList] = useState([]);
  const [selectedPlace, setSeletedPlace] = useState(null);

  const handleSelectedPlace = (key) => {
    const place = pleaseList.find((place) => {
      return place.key === key;
    });
    setSeletedPlace(place);
  };
  const handleHideModel = ()=>{
    setSeletedPlace(null);
  }

  const handleDeleteItem = (key) => {
    setPlaseList(pleaseList.filter((place) => place.key  !== key));
    setSeletedPlace(null);
  };

  let placeDetail = null;
  if (selectedPlace != null) {
    placeDetail = (
      <PlaceDetail place={selectedPlace} handleHideModel={handleHideModel} handleDeleteItem={handleDeleteItem} />
    );
  }

  return (
    <View style={styles.container}>
      {placeDetail}
      <InputPlace
        inputValue={inputValue}
        setInputValue={setInputValue}
        pleaseList={pleaseList}
        setPlaseList={setPlaseList}
      />
      <PlaceList
        pleaseList={pleaseList}
        handleSelectedPlace={handleSelectedPlace}
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
});
