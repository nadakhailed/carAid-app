import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  FlatList,
} from "react-native";
import COLORS from "../constants/colors";

const vehicles = [
  {
    id: "1",
    model: "Toyota Prius",
    license: "AB 1234",
    image: require("../assets/facebook.png"),
  },
  {
    id: "2",
    model: "Toyota Prius",
    license: "AB 1234",
    image: require("../assets/facebook.png"),
  },
  {
    id: "3",
    model: "Toyota Prius",
    license: "AB 1234",
    image: require("../assets/facebook.png"),
  },
  {
    id: "4",
    model: "Toyota Prius",
    license: "AB 1234",
    image: require("../assets/facebook.png"),
  },
  {
    id: "5",
    model: "Toyota Prius",
    license: "AB 1234",
    image: require("../assets/facebook.png"),
  },
];

const MyVehicleScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.vehicleItem}
      onPress={() =>
        navigation.navigate("VehicleDetailsScreen", { vehicle: item })
      }
    >
      <View>
        <Text style={styles.vehicleModel}>{item.model}</Text>
        <Text style={styles.vehicleLicense}>{item.license}</Text>
      </View>
      <Image source={item.image} style={styles.vehicleImage} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>My Vehicle</Text>
      <FlatList
        data={vehicles}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>ADD A VEHICLE</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 50,
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  vehicleItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  vehicleModel: {
    fontSize: 16,
    fontWeight: "bold",
  },
  vehicleLicense: {
    fontSize: 14,
    color: "#777",
  },
  vehicleImage: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
  addButton: {
    backgroundColor: COLORS.primary,
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
  },
  addButtonText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default MyVehicleScreen;
