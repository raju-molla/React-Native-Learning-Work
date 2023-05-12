import React from "react";
import {
  Modal,
  Image,
  View,
  Text,
  Button,
  Platform,
  StyleSheet,
  Touchable,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
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
          <TouchableOpacity
            style={styles.delete}
            onPress={() => {
              props.handleDeleteItem(props.place.key);
            }}
          >
            <Icon name="trash" size={60} color="red" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.close}
            onPress={() => {
              props.handleHideModel();
            }}
          >
            <Icon name="close" size={60} color="green" />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  delete: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    width: "100%",
    // backgroundColor: "red",
  },
  close: {
    alignItems: "center",
  },
});

export default PlaceDetail;
