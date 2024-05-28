import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image,
} from "react-native";
import COLORS from "../constants/colors";

const AddMoneyToWalletScreen = () => {
  const [amount, setAmount] = useState("");
  const [selectedButton, setSelectedButton] = useState(null);

  const handleAmountChange = (value) => {
    setAmount(value);
  };

  const handleButtonPress = (value, button) => {
    setAmount((+amount + value).toString());
    setSelectedButton(button);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Add money to wallet</Text>
      <View style={styles.balanceContainer}>
        <Text style={styles.balanceLabel}>Available balance</Text>
        <Text style={styles.balanceAmount}>$54.75</Text>
      </View>
      <TextInput
        style={styles.amountInput}
        value={amount}
        onChangeText={handleAmountChange}
        keyboardType="numeric"
        placeholder="$ 0.00"
      />
      <View style={styles.amountButtons}>
        <TouchableOpacity
          style={[
            styles.amountButton,
            selectedButton === 10 && styles.selectedButton,
          ]}
          onPress={() => handleButtonPress(10, 10)}
        >
          <Text
            style={[
              styles.amountButtonText,
              selectedButton === 10 && styles.selectedButtonText,
            ]}
          >
            +10
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.amountButton,
            selectedButton === 20 && styles.selectedButton,
          ]}
          onPress={() => handleButtonPress(20, 20)}
        >
          <Text
            style={[
              styles.amountButtonText,
              selectedButton === 20 && styles.selectedButtonText,
            ]}
          >
            +20
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.amountButton,
            selectedButton === 50 && styles.selectedButton,
          ]}
          onPress={() => handleButtonPress(50, 50)}
        >
          <Text
            style={[
              styles.amountButtonText,
              selectedButton === 50 && styles.selectedButtonText,
            ]}
          >
            +50
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bankInfo}>
        <Text style={styles.bankLabel}>From Bank Account</Text>
        <View style={styles.bankDetails}>
          <Image
            source={require("../assets/facebook.png")}
            style={styles.bankImage}
          />
          <Text style={styles.bankText}>Standard Chartered Bank</Text>
          <Text style={styles.bankAccount}>**** 3315</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitButtonText}>SUBMIT REQUEST</Text>
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
  balanceContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  balanceLabel: {
    fontSize: 16,
    color: "#777",
  },
  balanceAmount: {
    fontSize: 36,
    fontWeight: "bold",
    color: COLORS.black,
  },
  amountInput: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    borderRadius: 5,
    fontSize: 24,
    textAlign: "center",
    marginBottom: 20,
  },
  amountButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  amountButton: {
    padding: 10,
    borderRadius: 5,
    width: 60,
    alignItems: "center",
    borderColor: COLORS.darkBlue,
    borderWidth: 1,
  },
  amountButtonText: {
    fontSize: 16,
    color: COLORS.darkBlue,
  },
  selectedButton: {
    backgroundColor: COLORS.darkBlue,
  },
  selectedButtonText: {
    color: "#fff",
  },
  bankInfo: {
    marginTop: 20,
    marginBottom: 20,
  },
  bankLabel: {
    fontSize: 16,
    color: "#777",
    marginBottom: 10,
  },
  bankDetails: {
    flexDirection: "row",
    alignItems: "center",
  },
  bankImage: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  bankText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  bankAccount: {
    fontSize: 16,
    color: "#777",
    marginLeft: 5,
  },
  submitButton: {
    backgroundColor: COLORS.primary,
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: "center",
  },
  submitButtonText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default AddMoneyToWalletScreen;
