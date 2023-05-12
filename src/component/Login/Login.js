import React from "react";
import { View, Text, Button } from "react-native";
// import Icon  from "re act-native-vector-icons/Icon";
const Login = (props) => {
  return (
    <View>
      <Text>Screen</Text>
      <Button
        title="Login"
        onPress={() => {
          props.navigation.navigate("Home");
        }}
      />
    </View>
  );
};

export default Login;
