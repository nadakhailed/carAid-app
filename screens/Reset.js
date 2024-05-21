import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../components/Button";
import COLORS from "../constants/colors";

const Reset = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [isEmailSent, setIsEmailSent] = useState(false);

  const handleResetPassword = () => {
    // Validate input fields
    if (!email || !newPassword || !confirmEmail || !confirmNewPassword) {
      alert("Please fill in all fields.");
      return;
    }
    if (email !== confirmEmail) {
      alert("Emails do not match.");
      return;
    }

    // Check if new password and confirm new password match
    if (newPassword !== confirmNewPassword) {
      alert("Passwords do not match.");
      return;
    }

    // Implement your password reset logic here (e.g., send reset email)
    setIsEmailSent(true);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={styles.container}>
        <Text style={styles.title}>Reset Password</Text>
        {!isEmailSent ? (
          <>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "400",
                marginVertical: 5,
                marginHorizontal: 15,
                color: COLORS.black,
                textAlign: "left",
              }}
            >
              New Password
            </Text>
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="Enter new password"
                value={newPassword}
                onChangeText={(text) => setNewPassword(text)}
                secureTextEntry={true}
                style={styles.input}
              />
            </View>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "400",
                marginVertical: 5,
                marginHorizontal: 15,
                color: COLORS.black,
                textAlign: "left",
              }}
            >
              Confirm Password
            </Text>
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="Confirm new password"
                value={confirmNewPassword}
                onChangeText={(text) => setConfirmNewPassword(text)}
                secureTextEntry={true}
                style={styles.input}
              />
            </View>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "400",
                marginVertical: 5,
                marginHorizontal: 15,
                color: COLORS.black,
                textAlign: "left",
              }}
            >
              Account Number
            </Text>
            <View style={styles.inputContainer}>
              <TextInput
                secureTextEntry={true}
                placeholder="Enter Account Number"
                value={confirmEmail}
                onChangeText={(text) => setConfirmEmail(text)}
                style={styles.input}
              />
            </View>
            <Button
              title="Reset Password"
              filled
              onPress={handleResetPassword}
              style={styles.button}
            />
          </>
        ) : (
          <>
            <Text style={styles.description}>
              An email with password reset instructions has been sent to:
            </Text>
            <Text style={styles.email}>{email}</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text style={styles.loginLink}>Return to Login</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    color: COLORS.black,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
    color: COLORS.black,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    borderWidth: 1,
    borderColor: COLORS.black,
    borderRadius: 50,
    paddingHorizontal: 12,
    height: 50,
  },
  input: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
    color: COLORS.black,
  },
  button: {
    marginTop: 10,
    borderRadius: 50,
  },
  email: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: COLORS.black,
  },
  loginLink: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    color: COLORS.primary,
  },
});

export default Reset;
