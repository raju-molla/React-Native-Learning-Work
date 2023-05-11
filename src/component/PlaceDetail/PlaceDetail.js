import React from "react";
import {
  Modal,
  Image,
  View,
  Text,
  Button,
  Platform,
  StyleSheet,
} from "react-native";
import CustomButton from "../Button/CustomButtom";

const PlaceDetail = (props) => {
  return (
    <Modal>
      <View style={{ marginTop: 50 }}>
        <Image
          source={props.place.image}
          style={{
            width: "100%",
            height: 300,
          }}
        />
        <Text
          style={{
            textAlign: "center",
            fontSize: 40,
          }}
        >
          {props.place.value}
        </Text>
        <View>
          <CustomButton
            title="Delete"
            color="red"
            onPress={() => {
              props.handleDeleteItem(props.place.key);
            }}
          />
          <CustomButton
            onPress={() => {
              props.handleHideModel();
            }}
            title="close"
            color="green"
          />
        </View>
      </View>
    </Modal>
  );
};

export default PlaceDetail;
