import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import COLORS from "../constants/colors";

const DriverProfileScreen = ({ navigation }) => {
  const handleBackToMap = () => {
    navigation.goBack();
  };

  const handleRideDetailsPress = () => {
    const cost = "154.75";
    const name = "Jessica Bob";
    const date = "2 May'19 at 2:20 pm";

    navigation.navigate("RideDetailsScreen", { cost, name, date });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.ScreenDetails}>Driver Profile</Text>
      <View style={styles.upperContainer}>
        <View style={styles.header}>
          <Image
            source={{ uri: "https://www.gravatar.com/avatar/?d=mp" }}
            style={styles.profileImage}
          />
          <Text style={styles.driverName}>Abo soso</Text>
          <Text style={styles.rating}>4.89</Text>
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.details}>3250 Total Fix</Text>
          <Text style={styles.details}>2.5 Years</Text>
        </View>
      </View>
      <View style={styles.lowerContainer}>
        <Text style={styles.sectionTitle}>Personal Info</Text>
        <Text style={styles.personalInfoText}>• +20 **********</Text>
        <Text style={styles.personalInfoText}>• James@yellowtaxi.com</Text>
        <Text style={styles.personalInfoText}>• English and Spanish</Text>
        <Text style={styles.personalInfoText}>• RM6 NL, PO 2452, New York</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleBackToMap}>
        <Text style={styles.buttonText}>Back to Map</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleRideDetailsPress}>
        <Text style={styles.buttonText}>Rider Details</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    height: 250,
  },
  ScreenDetails: {
    fontSize: 20,
    fontWeight: "bold",
    color: COLORS.black,
    marginTop: 50,
    marginLeft: 140,
  },
  upperContainer: {
    marginTop: -10,
    paddingBottom: 20,
    paddingTop: 50,
    alignItems: "center",
    justifyContent: "center",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  header: {
    alignItems: "center",
    marginBottom: 10,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
    borderWidth: 3,
    borderColor: COLORS.primary,
  },
  driverName: {
    fontSize: 24,
    fontWeight: "bold",
    color: COLORS.black,
  },
  rating: {
    fontSize: 20,
    color: COLORS.black,
  },
  detailsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "80%",
    marginTop: 10,
    backgroundColor: COLORS.primary,
    height: 50,
    alignItems: "center",
    borderRadius: 10,
  },
  details: {
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.white,
    textAlignVertical: "center",
  },
  lowerContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  personalInfoText: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: COLORS.primary,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 20,
    marginHorizontal: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default DriverProfileScreen;
