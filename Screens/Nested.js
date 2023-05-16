import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./HomeScreen";
import ChartScreen from "./ChartScreen";
import HistoryScreen from "./HistoryScreen";
import {
  ChartPie,
  DocumentChartBar,
  Home,
} from "@nandorojo/heroicons/24/outline";

const Tab = createBottomTabNavigator();

const Nested = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          if (route.name === "Home") {
            return <Home style={{ color: color, fontSize: size }}>Home</Home>;
          }
          if (route.name === "Chart") {
            return (
              <ChartPie style={{ color: color, fontSize: size }}></ChartPie>
            );
          }

          if (route.name === "History") {
            return (
              <DocumentChartBar
                style={{ color: color, fontSize: size }}
              ></DocumentChartBar>
            );
          }
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      ></Tab.Screen>
      <Tab.Screen
        name="Chart"
        component={ChartScreen}
        options={{ headerShown: false }}
      ></Tab.Screen>
      <Tab.Screen
        name="History"
        component={HistoryScreen}
        options={{ headerShown: false }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
};

export default Nested;
