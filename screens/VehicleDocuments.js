import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import * as DocumentPicker from "expo-document-picker";
import COLORS from "../constants/colors";

const VehicleDocuments = ({ navigation }) => {
  const [rcBook, setRcBook] = useState(null);
  const [insurancePolicy, setInsurancePolicy] = useState(null);
  const [ownerCertificate, setOwnerCertificate] = useState(null);
  const [license, setLicense] = useState(null);

  const pickDocument = async (setDocument) => {
    let result = await DocumentPicker.getDocumentAsync({});
    if (result.type === "success") {
      setDocument(result.uri);
    }
  };

  const handleNext = () => {
    navigation.navigate("BankDetails");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Vehicle Documents</Text>

      <View style={styles.documentContainer}>
        <View>
          <Text style={styles.documentText}>RC Book</Text>
          <Text style={styles.docSubText}>Vehicle Registration</Text>
        </View>
        <TouchableOpacity onPress={() => pickDocument(setRcBook)}>
          <Text style={styles.uploadLinkText}>UPLOAD</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.fileName}>
        {rcBook ? rcBook.split("/").pop() : ""}
      </Text>

      <View style={styles.documentContainer}>
        <View>
          <Text style={styles.documentText}>Insurance Policy</Text>
          <Text style={styles.docSubText}>
            A driving License is an official document
          </Text>
        </View>
        <TouchableOpacity onPress={() => pickDocument(setInsurancePolicy)}>
          <Text style={styles.uploadLinkText}>UPLOAD</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.fileName}>
        {insurancePolicy ? insurancePolicy.split("/").pop() : ""}
      </Text>

      <View style={styles.documentContainer}>
        <View>
          <Text style={styles.documentText}>Owner Certificate</Text>
          <Text style={styles.docSubText}>
            A passport is a travel document ...
          </Text>
        </View>
        <TouchableOpacity onPress={() => pickDocument(setOwnerCertificate)}>
          <Text style={styles.uploadLinkText}>UPLOAD</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.fileName}>
        {ownerCertificate ? ownerCertificate.split("/").pop() : ""}
      </Text>

      <View style={styles.documentContainer}>
        <View>
          <Text style={styles.documentText}>License</Text>
          <Text style={styles.docSubText}>Incorrect document type</Text>
        </View>
        <TouchableOpacity onPress={() => pickDocument(setLicense)}>
          <Text style={styles.uploadLinkText}>UPLOAD</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.fileName}>
        {license ? license.split("/").pop() : ""}
      </Text>

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

export default VehicleDocuments;
