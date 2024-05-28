import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import COLORS from "../constants/colors";

const VehicleDetailsScreen = ({ route, navigation }) => {
  const { vehicle } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.vehicleModel}>{vehicle.model}</Text>
        <Text style={styles.vehicleLicense}>{vehicle.license}</Text>
      </View>
      <View style={styles.documentContainer}>
        <View style={styles.documentItem}>
          <View>
            <Text style={styles.documentTitle}>Vehicle Registration</Text>
            <Text style={styles.documentSubtitle}>Vehicle Registration</Text>
          </View>
          <Text style={styles.documentStatusApproved}>APPROVED</Text>
        </View>
        <View style={styles.documentItem}>
          <View>
            <Text style={styles.documentTitle}>Vehicle Insurance</Text>
            <Text style={styles.documentSubtitle}>Expires: 22 Nov 2020</Text>
          </View>
          <Text style={styles.documentStatusApproved}>APPROVED</Text>
        </View>
        <View style={styles.documentItem}>
          <View>
            <Text style={styles.documentTitle}>Vehicle Permit</Text>
            <Text style={styles.documentSubtitle}>Expires: 11 Apr 2022</Text>
          </View>
          <Text style={styles.documentStatusApproved}>APPROVED</Text>
        </View>
        <View style={styles.documentItem}>
          <View>
            <Text style={styles.documentTitle}>Vehicle Loan EMI Details</Text>
            <Text style={styles.documentSubtitle}>Incorrect document type</Text>
          </View>
          <Text style={styles.documentStatusNotApproved}>NOT APPROVED</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 50,
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
  },
  vehicleModel: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  vehicleLicense: {
    fontSize: 18,
    color: "#777",
    textAlign: "center",
  },
  documentContainer: {
    marginTop: 20,
  },
  documentItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  documentTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  documentSubtitle: {
    fontSize: 14,
    color: "#777",
  },
  documentStatusApproved: {
    backgroundColor: "lightgreen",
    width: 130,
    height: 30,
    textAlign: "center",
    textAlignVertical: "center",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    borderRadius: 5,
    color: "green",
    fontWeight: "bold",
    borderColor: "green",
    borderWidth: 1,
  },
  documentStatusNotApproved: {
    backgroundColor: "pink",
    width: 130,
    height: 30,
    textAlign: "center",
    textAlignVertical: "center",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    borderRadius: 5,
    color: "red",
    fontWeight: "bold",
    borderColor: "red",
    borderWidth: 1,
  },
});

export default VehicleDetailsScreen;
