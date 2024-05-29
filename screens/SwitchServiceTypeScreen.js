import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Switch } from "react-native";
import COLORS from "../constants/colors";

const SwitchServiceTypeScreen = ({ navigation }) => {
  const [isMechanic, setIsMechanic] = useState(false);
  const [isCarOwner, setIsCarOwner] = useState(true);
  const [isSparePartsShopOwner, setIsSparePartsShopOwner] = useState(false);

  const handleNavigation = () => {
    if (isMechanic) {
      navigation.navigate("MechanicProfileScreen");
    } else if (isCarOwner) {
      navigation.navigate("CarOwnerProfileScreen");
    } else if (isSparePartsShopOwner) {
      navigation.navigate("SparePartsProfileScreen");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.optionContainer}>
        <Text style={styles.optionText}>Mechanic</Text>
        <Switch
          value={isMechanic}
          onValueChange={(value) => {
            setIsMechanic(value);
            setIsCarOwner(!value);
            setIsSparePartsShopOwner(false);
          }}
        />
      </View>
      <View style={styles.optionContainer}>
        <Text style={styles.optionText}>Car Owner</Text>
        <Switch
          value={isCarOwner}
          onValueChange={(value) => {
            setIsMechanic(false);
            setIsCarOwner(value);
            setIsSparePartsShopOwner(false);
          }}
        />
      </View>
      <View style={styles.optionContainer}>
        <Text style={styles.optionText}>Spare Parts Shop Owner</Text>
        <Switch
          value={isSparePartsShopOwner}
          onValueChange={(value) => {
            setIsMechanic(false);
            setIsCarOwner(false);
            setIsSparePartsShopOwner(value);
          }}
        />
      </View>
      <TouchableOpacity
        style={[
          styles.navigateButton,
          !(isMechanic || isCarOwner || isSparePartsShopOwner) &&
            styles.disabledButton,
        ]}
        onPress={handleNavigation}
        disabled={!(isMechanic || isCarOwner || isSparePartsShopOwner)}
      >
        <Text style={styles.navigateButtonText}>Go to Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    padding: 20,
    justifyContent: "center",
  },
  optionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  optionText: {
    fontSize: 16,
    color: "#333",
  },
  navigateButton: {
    marginTop: 30,
    paddingVertical: 15,
    backgroundColor: COLORS.primary,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
  },
  navigateButtonText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
  disabledButton: {
    backgroundColor: "#ddd",
  },
});

export default SwitchServiceTypeScreen;
