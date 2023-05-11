import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import InputPlace from "./component/InputPlace/InputPlace";
import PlaceDetail from "./component/PlaceDetail/PlaceDetail";
import PlaceList from "./component/PlaceList/PlaceList";
import { connect } from "react-redux";
import { addPlace, deletePlace } from "./redux/actionCreators";

const mapStateToProps = (state) => {
  return {
    pleaseList: state.pleaseList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPlace: (place) => dispatch(addPlace(place)),
    deletePlace: (key) => dispatch(deletePlace(key)),
  };
};

const MainComponent = (props) => {
  const [inputValue, setInputValue] = useState("");
  const [selectedPlace, setSeletedPlace] = useState(null);

  const handleSelectedPlace = (key) => {
    const place = props.pleaseList.find((place) => {
      return place.key === key;
    });
    setSeletedPlace(place);
  };
  const handleHideModel = () => {
    setSeletedPlace(null);
  };

  const handleDeleteItem = (key) => {
    
    props.deletePlace(key);
    setSeletedPlace(null);
  };

  let placeDetail = null;
  if (selectedPlace != null) {
    placeDetail = (
      <PlaceDetail
        place={selectedPlace}
        handleHideModel={handleHideModel}
        handleDeleteItem={handleDeleteItem}
      />
    );
  }

  return (
    <View style={styles.container}>
      {placeDetail}
      <InputPlace
        inputValue={inputValue}
        setInputValue={setInputValue}
        pleaseList={props.pleaseList}
        addPlace={props.addPlace}
      />
      <PlaceList
        pleaseList={props.pleaseList}
        handleSelectedPlace={handleSelectedPlace}
      />

      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "column",
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MainComponent);
