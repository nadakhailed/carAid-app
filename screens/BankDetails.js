import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "../constants/colors";
import Button from "../components/Button";

const BankDetails = ({ navigation }) => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryMonth, setExpiryMonth] = useState("");
  const [expiryYear, setExpiryYear] = useState("");
  const [securityCode, setSecurityCode] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleAddVisa = () => {
    navigation.navigate("SubscriptionPlan");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Bank Details</Text>
        <Text style={styles.subtitle}>Add Credit/Debit Card</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Card Number</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Card Number"
            keyboardType="numeric"
            onChangeText={setCardNumber}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Expiry Date</Text>
          <View style={styles.row}>
            <TextInput
              style={[styles.input, styles.expiryInput]}
              placeholder="MM"
              keyboardType="numeric"
              maxLength={2}
              onChangeText={setExpiryMonth}
            />
            <Text style={styles.divider}>/</Text>
            <TextInput
              style={[styles.input, styles.expiryInput]}
              placeholder="YY"
              keyboardType="numeric"
              maxLength={2}
              onChangeText={setExpiryYear}
            />
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Security Code</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Security Code"
            keyboardType="numeric"
            maxLength={3}
            onChangeText={setSecurityCode}
          />
        </View>

        {/* First Name  */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>First Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter First Name"
            onChangeText={setFirstName}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Last Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Last Name"
            onChangeText={setLastName}
          />
        </View>

        <Button
          title="+ Add Visa"
          filled
          onPress={handleAddVisa}
          style={styles.button}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  content: {
    flex: 1,
    marginHorizontal: 22,
    marginTop: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: COLORS.black,
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.darkGray,
    textAlign: "center",
    marginBottom: 20,
    marginTop: 20,
    left: -90,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    color: COLORS.darkGray,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderRadius: 50,
    paddingHorizontal: 15,
    borderColor: COLORS.lightGray,
  },
  expiryInput: {
    width: "30%",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  divider: {
    marginHorizontal: 5,
    fontSize: 20,
    color: COLORS.darkGray,
  },
  button: {
    marginTop: 20,
    marginBottom: 4,
    borderRadius: 50,
    height: 60,
  },
});

export default BankDetails;
