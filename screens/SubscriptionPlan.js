import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import COLORS from "../constants/colors";

const SubscriptionPlan = ({ navigation }) => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const selectPlan = (planName) => {
    setSelectedPlan(planName);
  };

  const saveSubscription = () => {
    if (selectedPlan) {
      console.log("Selected plan:", selectedPlan);
      Alert.alert(
        "Thank you for registering for Car Aid Application",
        `You have selected the ${selectedPlan} plan.`,
        [{ text: "OK", onPress: () => {} }],
        { cancelable: false }
      );
      setTimeout(() => {
        navigation.navigate("Login");
      }, 3000);
    } else {
      console.log("Please select a plan");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Subscription Plans</Text>

      <TouchableOpacity
        style={[
          styles.planContainer,
          selectedPlan === "Basic" && styles.selectedPlan,
        ]}
        onPress={() => selectPlan("Basic")}
      >
        <View style={styles.planRow}>
          <Text style={styles.planName}>Basic Plan</Text>
          <Text style={styles.planPrice}>Free</Text>
        </View>
        <Text style={styles.planDetails}>
          1 Month {"\n"}10 videos everyday {"\n"}2 free checkups {"\n"}5 free
          fixes
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.planContainer,
          selectedPlan === "Classic" && styles.selectedPlan,
        ]}
        onPress={() => selectPlan("Classic")}
      >
        <View style={styles.planRow}>
          <Text style={styles.planName}>Classic Plan</Text>
          <Text style={styles.planPrice}>$20.50</Text>
        </View>
        <Text style={styles.planDetails}>
          1 Month {"\n"}10 videos everyday {"\n"}2 free checkups {"\n"}5 free
          fixes
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.saveButton} onPress={saveSubscription}>
        <Text style={styles.saveButtonText}>Save</Text>
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
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: COLORS.black,
    textAlign: "center",
  },
  planContainer: {
    backgroundColor: COLORS.white,
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
  },
  selectedPlan: {
    backgroundColor: COLORS.primary,
  },
  planRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  planName: {
    fontSize: 20,
    fontWeight: "bold",
    color: COLORS.black,
  },
  planPrice: {
    fontSize: 18,
    color: COLORS.black,
  },
  planDetails: {
    fontSize: 16,
    color: COLORS.black,
    marginBottom: 10,
  },
  saveButton: {
    backgroundColor: COLORS.primary,
    padding: 15,
    borderRadius: 50,
    alignItems: "center",
  },
  saveButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.white,
    borderRadius: 50,
  },
});

export default SubscriptionPlan;
