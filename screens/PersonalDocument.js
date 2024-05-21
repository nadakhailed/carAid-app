import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import * as DocumentPicker from "expo-document-picker";
import COLORS from "../constants/colors";

const PersonalDocuments = ({ navigation }) => {
  const [birthCertificate, setBirthCertificate] = useState(null);
  const [drivingLicence, setDrivingLicence] = useState(null);
  const [passport, setPassport] = useState(null);
  const [electionCard, setElectionCard] = useState(null);

  const pickDocument = async (setDocument) => {
    let result = await DocumentPicker.getDocumentAsync({});
    if (result.type === "success") {
      setDocument(result.uri);
    }
  };

  const handleNext = () => {
    navigation.navigate("AddVehicle");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Personal Documents</Text>

      <View style={styles.documentContainer}>
        <View>
          <Text style={styles.documentText}>Birth Certificate</Text>
          <Text style={styles.docSubText}>Vehicle Registration</Text>
        </View>
        <TouchableOpacity onPress={() => pickDocument(setBirthCertificate)}>
          <Text style={styles.uploadLinkText}>UPLOAD</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.fileName}>
        {birthCertificate ? birthCertificate.split("/").pop() : ""}
      </Text>

      <View style={styles.documentContainer}>
        <View>
          <Text style={styles.documentText}>Driving Licence</Text>
          <Text style={styles.docSubText}>
            Driving Licence is an official document
          </Text>
        </View>
        <TouchableOpacity onPress={() => pickDocument(setDrivingLicence)}>
          <Text style={styles.uploadLinkText}>UPLOAD</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.fileName}>
        {drivingLicence ? drivingLicence.split("/").pop() : ""}
      </Text>

      <View style={styles.documentContainer}>
        <View>
          <Text style={styles.documentText}>Passport</Text>
          <Text style={styles.docSubText}>
            A passport is a travel document ...
          </Text>
        </View>
        <TouchableOpacity onPress={() => pickDocument(setPassport)}>
          <Text style={styles.uploadLinkText}>UPLOAD</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.fileName}>
        {passport ? passport.split("/").pop() : ""}
      </Text>

      <View style={styles.documentContainer}>
        <View>
          <Text style={styles.documentText}>Election Card</Text>
          <Text style={styles.docSubText}>Incorrect document type</Text>
        </View>
        <TouchableOpacity onPress={() => pickDocument(setElectionCard)}>
          <Text style={styles.uploadLinkText}>UPLOAD</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.fileName}>
        {electionCard ? electionCard.split("/").pop() : ""}
      </Text>

      <View style={styles.termsContainer}>
        <Text style={styles.termsText}>
          By continuing, I confirm that I have read the{" "}
          <Text style={styles.linkText}>Terms & Conditions</Text> and{" "}
          <Text style={styles.linkText}>Privacy Policy</Text>.
        </Text>
      </View>

      <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: COLORS.white,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 50,
    color: COLORS.black,
    textAlign: "center",
  },
  documentContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  documentText: {
    fontSize: 16,
    color: COLORS.black,
    fontWeight: "bold",
  },
  docSubText: {
    fontSize: 14,
    color: COLORS.grey,
    marginTop: 5,
  },
  uploadLinkText: {
    fontSize: 16,
    color: COLORS.darkColorPrim,
    fontWeight: "bold",
  },
  fileName: {
    fontSize: 14,
    color: COLORS.grey,
    textAlign: "center",
    marginBottom: 10,
  },
  termsContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  termsText: {
    fontSize: 14,
    color: COLORS.black,
    textAlign: "center",
  },
  linkText: {
    color: COLORS.primary,
    textDecorationLine: "underline",
  },
  nextButton: {
    backgroundColor: COLORS.primary,
    padding: 15,
    borderRadius: 50,
    width: "100%",
    alignItems: "center",
    marginTop: 20,
  },
  nextButtonText: {
    color: COLORS.white,
    fontSize: 16,
  },
});

export default PersonalDocuments;
