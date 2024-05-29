import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import COLORS from "../constants/colors";

const reports = [
  { id: "1", name: "Ahmed", issue: "Bad Review" },
  { id: "2", name: "Osama", issue: "Balance insufficient" },
  { id: "3", name: "Medhat", issue: "Late" },
  { id: "4", name: "Mohamed", issue: "" },
  { id: "5", name: "Barita", issue: "" },
];

const Reports = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image
        source={{ uri: "https://www.gravatar.com/avatar/?d=mp" }}
        style={styles.profileImage}
      />
      <View style={styles.textContainer}>
        <Text style={styles.nameText}>{item.name}</Text>
        <Text style={styles.issueText}>{item.issue}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Reports</Text>
        <TouchableOpacity
          onPress={() => {
            /* Handle view all */
          }}
        >
          <Text style={styles.viewAllText}>View all</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={reports}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  viewAllText: {
    fontSize: 16,
    color: "#FF4500",
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  textContainer: {
    marginLeft: 15,
  },
  nameText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  issueText: {
    fontSize: 14,
    color: COLORS.darkColorPrim,
  },
  separator: {
    height: 1,
    backgroundColor: COLORS.primary,
    marginHorizontal: 20,
  },
});

export default Reports;
