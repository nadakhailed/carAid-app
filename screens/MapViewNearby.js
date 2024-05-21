import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Modal,
  ActivityIndicator,
} from "react-native";
import COLORS from "../constants/colors";
import MapView, { Marker } from "react-native-maps";

const MapViewNearby = ({ navigation }) => {
  const today = new Date().toDateString();

  const [menuVisible, setMenuVisible] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [searching, setSearching] = useState(false);
  const [markers, setMarkers] = useState([]);

  const navigateToProfile = () => {
    navigation.navigate("Login");
  };

  const openMenu = () => {
    setMenuVisible(true);
  };

  const closeMenu = () => {
    if (searching) {
      cancelSearch();
    }
    setMenuVisible(false);
  };

  const selectOption = (option) => {
    if (selectedOptions.length < 2 && !selectedOptions.includes(option)) {
      setSelectedOptions([...selectedOptions, option]);
    } else if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    }
  };

  const startSearch = () => {
    setSearching(true);

    setTimeout(() => {
      const randomizedMarkers = [];
      for (let i = 0; i < 5; i++) {
        const lat = 31.26558 + (Math.random() - 0.5) * 0.02;
        const lng = 29.99823 + (Math.random() - 0.5) * 0.02;
        randomizedMarkers.push({ latitude: lat, longitude: lng });
      }
      setMarkers(randomizedMarkers);

      setSearching(false);
    }, 3000);
  };

  const cancelSearch = () => {
    setSearching(false);
    setMenuVisible(false);
  };

  const handleSearchPress = () => {
    if (selectedOptions.length > 0 && !searching) {
      startSearch();
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.dateText}>{today}</Text>

      <TouchableOpacity
        style={styles.userImageContainer}
        onPress={navigateToProfile}
      >
        <Image
          source={require("../assets/facebook.png")}
          style={styles.userImage}
        />
      </TouchableOpacity>

      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 31.265580739922147,
          longitude: 29.998229724273717,
          latitudeDelta: 0.009,
          longitudeDelta: 0.008,
        }}
      >
        {markers.map((marker, index) => (
          <Marker
            key={index}
            coordinate={marker}
            title={`Randomized Marker ${index + 1}`}
          />
        ))}
      </MapView>

      <TouchableOpacity style={styles.menuButton} onPress={openMenu}>
        <Text style={styles.menuButtonText}>Menu</Text>
      </TouchableOpacity>

      <Modal
        visible={menuVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={closeMenu}
      >
        <View style={styles.menuSlider}>
          <TouchableOpacity onPress={closeMenu}>
            <Text style={styles.closeButton}>X</Text>
          </TouchableOpacity>
          <Text style={styles.FindingService}>Finding Service</Text>

          <TouchableOpacity
            onPress={() => selectOption("Mechanic")}
            style={[
              styles.menuItem,
              selectedOptions.includes("Mechanic") && styles.selectedOption,
            ]}
          >
            <Text style={styles.menuItemText}>Mechanic Nearby</Text>
            <Text style={styles.subText}>More mechanics than usual</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => selectOption("Spare Parts Shop")}
            style={[
              styles.menuItem,
              selectedOptions.includes("Spare Parts Shop") &&
                styles.selectedOption,
            ]}
          >
            <Text style={styles.menuItemText}>Spare Shop Nearby</Text>
            <Text style={styles.subText}>More Shops than usual</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.menuItem,
              styles.searchButton,
              selectedOptions.length === 0 && styles.disabledButton,
            ]}
            onPress={handleSearchPress}
            disabled={searching || selectedOptions.length === 0}
          >
            <Text style={styles.searchButton}>Search</Text>
          </TouchableOpacity>

          {searching && (
            <TouchableOpacity
              style={[styles.menuItem, styles.cancelButton]}
              onPress={cancelSearch}
            >
              <Text style={styles.cancelButton}>Cancel</Text>
            </TouchableOpacity>
          )}

          {searching && (
            <ActivityIndicator size="large" color={COLORS.darkColorPrim} />
          )}

          {searching && markers.length > 0 && (
            <Text style={styles.foundText}>
              {markers.length} markers found for selected options
            </Text>
          )}
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  dateText: {
    position: "absolute",
    top: 50,
    left: "50%",
    transform: [{ translateX: -100 }],
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    zIndex: 1,
    backgroundColor: COLORS.white,
    width: 200,
    color: COLORS.darkGrey,
    padding: 5,
    shadowColor: COLORS.black,
  },
  userImageContainer: {
    position: "absolute",
    top: 45,
    right: 20,
    zIndex: 1,
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  menuButton: {
    position: "absolute",
    bottom: 20,
    alignSelf: "center",
    backgroundColor: "white",
    borderColor: COLORS.darkColorPrim,
    borderRadius: 50,
    borderWidth: 2,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    elevation: 2,
    zIndex: 2,
  },
  menuButtonText: {
    width: 100,
    color: COLORS.darkColorPrim,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  menuSlider: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "white",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    zIndex: 2,
  },
  FindingService: {
    fontSize: 20,
    fontWeight: "bold",
    alignContent: "center",
    alignSelf: "center",
    top: -33,
  },
  closeButton: {
    fontSize: 18,
    fontWeight: "bold",
    alignSelf: "center",
    marginBottom: 10,
    color: COLORS.darkColorPrim,
    left: -170,
  },
  menuItem: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "transparent",
    borderRadius: 10,
  },
  menuItemText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  subText: {
    fontSize: 14,
    color: "gray",
  },
  selectedOption: {
    borderColor: COLORS.darkColorPrim,
    borderWidth: 2,
  },
  searchButton: {
    backgroundColor: COLORS.darkColorPrim,
    color: "white",
    textAlign: "center",
    padding: 5,
    borderRadius: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
  cancelButton: {
    backgroundColor: "red",
    color: "white",
    textAlign: "center",
    padding: 5,
    borderRadius: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
  foundText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
    color: COLORS.darkColorPrim,
  },
  searchingText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
    color: COLORS.darkColorPrim,
  },
  disabledButton: {
    opacity: 0.5,
  },
});

export default MapViewNearby;
