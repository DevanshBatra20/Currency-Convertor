import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";

const GettingStarted = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image style={styles.image} source={require("../assets/Logo.png")} />
        <Text style={styles.heading}>How it works ?</Text>
        <Text style={styles.description}>
          A currenncy convertor uses exchange rates to show users how the values
          of two currencies are related
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Nested")}
        >
          <View>
            <Text style={styles.skipText}>Skip</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default GettingStarted;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#4D81FF",
    height: "100%",
    alignItems: "center",
  },

  image: {
    width: 300,
    height: 300,
    marginTop: 100,
  },

  heading: {
    fontSize: 30,
    color: "#D3D1D1",
  },

  description: {
    fontSize: 14,
    color: "white",
    textAlign: "center",
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
  },

  button: {
    alignSelf: "flex-end",
    top: 200,
    height: 50,
    margin: 20,
  },

  skipText: {
    color: "white",
    fontSize: 22,
  },

  secondaryContainer: {
    flexDirection: "row",
  },
});
