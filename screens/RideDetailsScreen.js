import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const RideDetailsScreen = ({ navigation, route }) => {
  const { cost, name, date } = route.params;

  const handleBackToMap = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.cost}>${cost}</Text>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.date}>{date}</Text>
      <TouchableOpacity style={styles.button} onPress={handleBackToMap}>
        <Text style={styles.buttonText}>Back to Map</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  cost: {
    fontSize: 36,
    fontWeight: "bold",
  },
  name: {
    fontSize: 24,
    marginVertical: 10,
  },
  date: {
    fontSize: 20,
    color: "#888",
  },
  button: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#007BFF",
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
});

export default RideDetailsScreen;
