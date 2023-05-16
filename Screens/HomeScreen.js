import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { SelectList } from "react-native-dropdown-select-list";

const HomeScreen = () => {
  const fromData = [
    { key: "1", value: "USD" },
    { key: "2", value: "INR" },
    { key: "3", value: "EURO" },
    { key: "4", value: "PKR" },
  ];

  const toData = [
    { key: "1", value: "USD" },
    { key: "2", value: "INR" },
    { key: "3", value: "EURO" },
    { key: "4", value: "PKR" },
  ];

  const [fromSelcted, setFromSelected] = useState("");
  const [toSelected, setToSelected] = useState("");
  const [value, setValue] = useState(0);
  const [result, setResult] = useState(0);

  const getResult = () => {
    if (fromSelcted === "INR" && toSelected === "USD") {
      setResult(value / 82.22);
    } else if (fromSelcted === "USD" && toSelected === "INR") {
      setResult(value * 82.22);
    } else if (fromSelcted === "EURO" && toSelected === "USD") {
      setResult(value * 1.09);
    } else if (fromSelcted === "EURO" && toSelected === "INR") {
      setResult(value * 89.47);
    } else if (fromSelcted === "INR" && toSelected === "EURO") {
      setResult(value / 89.47);
    } else if (fromSelcted === "USD" && toSelected === "EURO") {
      setResult(value / 1.09);
    } else if (fromSelcted === "PKR" && toSelected === "USD") {
      setResult(value / 281.75);
    } else if (fromSelcted === "USD" && toSelected === "PKR") {
      setResult(value * 281.75);
    } else if (fromSelcted === "PKR" && toSelected === "EURO") {
      setResult(value / 306.52);
    } else if (fromSelcted === "EURO" && toSelected === "PKR") {
      setResult(value * 306.52);
    } else if (fromSelcted === "PKR" && toSelected === "INR") {
      setResult(value / 3.43);
    } else if (fromSelcted === "INR" && toSelected === "PKR") {
      setResult(value * 3.43);
    }
  };
  return (
    <SafeAreaView>
      <View>
        <View style={styles.convertorContainer}>
          <Text style={styles.heading}>Convert any Currency</Text>
        </View>
        <View style={styles.dropDownCard}>
          <View style={styles.dropDownContainer}>
            <SelectList
              style={styles.dropDown}
              setSelected={(val) => setFromSelected(val)}
              data={fromData}
              save="value"
              placeholder="Currency"
              boxStyles={{ borderColor: "white" }}
            />
            <Text style={{ color: "black", alignItems: "center", margin: 14 }}>
              to
            </Text>
            <SelectList
              style={styles.dropDown}
              setSelected={(val) => setToSelected(val)}
              data={toData}
              save="value"
              placeholder=" Currency"
              boxStyles={{ borderColor: "white" }}
            />
          </View>
          <TextInput
            style={styles.textInput}
            onChangeText={(value) => setValue(value)}
            keyboardType="numeric"
          />
          <TouchableOpacity style={styles.button} onPress={getResult}>
            <Text style={styles.buttonText}>Convert</Text>
          </TouchableOpacity>
          <Text style={styles.valueText}>{result}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  convertorContainer: {
    position: "relative",
    height: 250,
    width: "100%",
    backgroundColor: "#4D81FF",
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
  },

  heading: {
    color: "#fff",
    fontSize: 22,
    width: 200,
    padding: 20,
    fontWeight: "bold",
  },

  dropDownCard: {
    position: "absolute",
    backgroundColor: "white",
    margin: 10,
    top: 110,
    alignSelf: "center",
    height: 200,
    width: "90%",
    borderRadius: 30,
  },

  dropDownContainer: {
    flexDirection: "row",
    justifyContent: "center",
    margin: 10,
  },

  textInput: {
    height: 55,
    width: "75%",
    marginTop: 10,
    borderWidth: 1,
    alignSelf: "center",
    borderRadius: 25,
    paddingLeft: 20,
  },

  button: {
    height: 55,
    width: "60%",
    backgroundColor: "#4D81FF",
    borderRadius: 25,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 35,
  },

  buttonText: {
    color: "white",
    fontSize: 22,
  },

  valueText: {
    alignSelf: "center",
    color: "black",
    fontWeight: "bold",
    fontSize: 30,
    marginTop: 50,
  },

  basicText: {
    alignSelf: "center",
    color: "gray",
    fontSize: 20,
    marginTop: 10,
  },
});
