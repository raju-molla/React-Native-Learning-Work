import React from "react";
import { Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FindPlace from "../FindPlace/FindPlace";
import SharePlace from "../SharePlaces/SharePlaces";
import Icons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();
const NavigationTab = (props) => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Share Places"
        component={SharePlace}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icons name="arrow-redo-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="FInd Places"
        component={FindPlace}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icons name="md-map" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default NavigationTab;
