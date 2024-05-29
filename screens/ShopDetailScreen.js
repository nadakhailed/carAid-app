import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import COLORS from "../constants/colors";

const ShopDetailScreen = ({ route, navigation }) => {
  const { shop } = route.params;

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://cdn-icons-png.flaticon.com/512/3593/3593767.png",
        }}
        style={styles.shopLogo}
      />
      <Text style={styles.shopTitle}>{shop.name} for spare parts</Text>
      <View style={styles.ratingContainer}>
        <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/1077/1077089.png",
          }}
          style={styles.starRatings}
        />
        <Text style={styles.ratingText}>4.5 (200 Reviews)</Text>
        <Text style={styles.ratingText}>Based on Google Search</Text>
      </View>
      <Text style={styles.locationTitle}>Location</Text>
      <Text style={styles.location}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare leo non
        mollis id cursus. Eu euismod faucibus in leo.
      </Text>
      <TouchableOpacity
        style={styles.offerButton}
        onPress={() => navigation.navigate("OffersScreen")}
      >
        <Text style={styles.offerButtonText}>Wheels for Toyota</Text>
        <Text style={styles.arrowText}>{">"}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
  },
  shopLogo: {
    width: 120,
    height: 120,
    alignSelf: "center",
    marginBottom: 20,
  },
  shopTitle: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },
  ratingContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  starRatings: {
    width: 120,
    height: 24,
    resizeMode: "contain",
  },
  ratingText: {
    fontSize: 16,
    color: COLORS.black,
    marginTop: 5,
  },
  locationTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
  },
  location: {
    fontSize: 16,
    color: COLORS.black,
    marginBottom: 20,
  },
  offerButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: COLORS.primary,
    padding: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    width: "100%",
  },
  offerButtonText: {
    fontSize: 18,
    color: COLORS.white,
    fontWeight: "bold",
  },
  arrowText: {
    fontSize: 20,
    color: COLORS.white,
    fontWeight: "bold",
  },
});

export default ShopDetailScreen;
