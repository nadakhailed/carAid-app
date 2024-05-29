import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  FlatList,
  TextInput,
} from "react-native";

const shops = [
  { id: "1", name: "Watnya" },
  { id: "2", name: "Watnya" },
  { id: "3", name: "mahmoud" },
  { id: "4", name: "Watnya" },
];

const ShopListScreen = ({ navigation }) => {
  const [search, setSearch] = useState("");
  const [filteredShops, setFilteredShops] = useState(shops);

  const handleSearch = (text) => {
    setSearch(text);
    if (text) {
      const newData = shops.filter((item) => {
        const itemData = item.name ? item.name.toUpperCase() : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredShops(newData);
    } else {
      setFilteredShops(shops);
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.shopItem}
      onPress={() => navigation.navigate("ShopDetailScreen", { shop: item })}
    >
      <Image
        source={require("../assets/facebook.png")}
        style={styles.shopLogo}
      />
      <Text style={styles.shopName}>{item.name}</Text>
      <TouchableOpacity style={styles.arrowButton}>
        <Text style={styles.arrowText}>{">"}</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search Shop"
        value={search}
        onChangeText={(text) => handleSearch(text)}
      />
      <FlatList
        data={filteredShops}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 10,
  },
  searchBar: {
    height: 50,
    borderColor: "#CCCCCC",
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 20,
    margin: 10,
    backgroundColor: "#FFFFFF",
  },
  shopItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 15,
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 3,
    height: 90,
  },
  shopLogo: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  shopName: {
    flex: 1,
    marginLeft: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
  arrowButton: {
    padding: 10,
  },
  arrowText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ShopListScreen;
