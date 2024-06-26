import React, { useEffect, useReducer, useMemo, createContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as SecureStore from "expo-secure-store";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { LogBox } from "react-native";

// Screen imports
import WelcomeScreen from "./screens/WelcomeScreen";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import Reset from "./screens/Reset";
import PhoneNumber from "./screens/PhoneNumber";
import Otp from "./screens/Otp";
import PersonalDocuments from "./screens/PersonalDocument";
import AddVehicle from "./screens/AddVehicle";
import VehicleDocuments from "./screens/VehicleDocuments";
import SubscriptionPlan from "./screens/SubscriptionPlan";
import MapViewNearby from "./screens/MapViewNearby";
import DriverProfileScreen from "./screens/DriverProfileScreen";
import RideDetailsScreen from "./screens/RideDetailsScreen";
import CancelRideScreen from "./screens/CancelRideScreen";
import CarOwnerProfileScreen from "./screens/CarOwnerProfileScreen";
import MechanicProfileScreen from "./screens/MechanicProfileScreen";
import SparePartsProfileScreen from "./screens/SparePartsProfileScreen";
import SettingsScreen from "./screens/SettingsScreen";
import SwitchServiceTypeScreen from "./screens/SwitchServiceTypeScreen";
import MyVehicleScreen from "./screens/MyVehicleScreen";
import VehicleDetailsScreen from "./screens/VehicleDetailsScreen";
import MyWalletScreen from "./screens/MyWalletScreen";
import AddMoneyToWalletScreen from "./screens/AddMoneyToWalletScreen";
import ShopListScreen from "./screens/ShopListScreen";
import OfferDetailsScreen from "./screens/OfferDetailsScreen";
import OffersScreen from "./screens/OffersScreen";
import ShopDetailScreen from "./screens/ShopDetailScreen";
import HomeNav from "./screens/HomeNav";
import Statistics from "./screens/Statistics";
import Reports from "./screens/Reports";
import Earning from "./screens/Earning";
import Traffic from "./screens/Traffic";
import Gated from "./screens/Gated";
import BankDetails from "./screens/BankDetails";
import SwitchServiceType from "./screens/SwitchServiceType";
import ThankYouCard from "./screens/ThankYouCard";

const Stack = createNativeStackNavigator();
export const AuthContext = createContext();

export default function App() {
  const [state, dispatch] = useReducer(
    (prevState, action) => {
      switch (action.type) {
        case "RESTORE_TOKEN":
          return { ...prevState, userToken: action.token, isLoading: false };
        case "SIGN_IN":
          return { ...prevState, userToken: action.token, isLoading: false };
        case "SIGN_OUT":
          return { ...prevState, isSignout: true, userToken: null };
        default:
          return prevState;
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );

  useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken;
      try {
        userToken = await SecureStore.getItemAsync("userToken");
      } catch (e) {
        console.error("Failed to load token", e);
      }
      dispatch({ type: "RESTORE_TOKEN", token: userToken });
    };

    bootstrapAsync();
  }, []);

  const authContext = useMemo(
    () => ({
      signIn: async (data) => {
        const token = "dummy-auth-token"; // Replace with actual authentication logic
        await SecureStore.setItemAsync("userToken", token);
        dispatch({ type: "SIGN_IN", token });
      },
      signOut: async () => {
        await SecureStore.deleteItemAsync("userToken");
        dispatch({ type: "SIGN_OUT" });
      },
      signUp: async (data) => {
        const token = "dummy-auth-token"; // Replace with actual registration logic
        await SecureStore.setItemAsync("userToken", token);
        dispatch({ type: "SIGN_IN", token });
      },
    }),
    []
  );

  LogBox.ignoreAllLogs();

  return (
    <Provider store={store}>
      <AuthContext.Provider value={authContext}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="WelcomeScreen">
            {state.userToken == null ? (
              <>
                <Stack.Screen
                  name="WelcomeScreen"
                  component={WelcomeScreen}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Login"
                  component={Login}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Signup"
                  component={Signup}
                  options={{ headerShown: false }}
                />
              </>
            ) : (
              <>
                {/* <Stack.Screen
                  name="HomeScreen"
                  component={HomeScreen}
                  options={{ headerShown: false }}
                /> */}
                <Stack.Screen
                  name="MapViewNearby"
                  component={MapViewNearby}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="DriverProfileScreen"
                  component={DriverProfileScreen}
                  // component={async ({ navigation }) => {
                  //   return (
                  //     <DriverProfileScreen
                  //       navigation={navigation}
                  //       logout={async () => {
                  //         await SecureStore.deleteItemAsync("userToken");
                  //         dispatch({ type: "SIGN_OUT" });
                  //       }}
                  //     />
                  //   );
                  // }}
                  options={{ headerShown: false }}
                />

                <Stack.Screen
                  name="RideDetailsScreen"
                  component={RideDetailsScreen}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="CancelRideScreen"
                  component={CancelRideScreen}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="CarOwnerProfileScreen"
                  component={CarOwnerProfileScreen}
                  // component={({ navigation }) => {
                  //   return (
                  //     <CarOwnerProfileScreen
                  //       navigation={navigation}
                  //       logout={async () => {
                  //         await SecureStore.deleteItemAsync("userToken");
                  //         dispatch({ type: "SIGN_OUT" });
                  //       }}
                  //     />
                  //   );
                  // }}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="MechanicProfileScreen"
                  component={MechanicProfileScreen}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="SparePartsProfileScreen"
                  component={SparePartsProfileScreen}
                  options={{ headerShown: false }}
                />

                <Stack.Screen
                  name="SettingsScreen"
                  component={SettingsScreen}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="SwitchServiceTypeScreen"
                  component={SwitchServiceTypeScreen}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="VehicleDetailsScreen"
                  component={VehicleDetailsScreen}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="MyVehicleScreen"
                  component={MyVehicleScreen}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="MyWalletScreen"
                  component={MyWalletScreen}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="AddMoneyToWalletScreen"
                  component={AddMoneyToWalletScreen}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="ShopListScreen"
                  component={ShopListScreen}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="ShopDetailScreen"
                  component={ShopDetailScreen}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="OfferDetailsScreen"
                  component={OfferDetailsScreen}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="OffersScreen"
                  component={OffersScreen}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="HomeNav"
                  component={HomeNav}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Statistics"
                  component={Statistics}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Reports"
                  component={Reports}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Earning"
                  component={Earning}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Traffic"
                  component={Traffic}
                  options={{ headerShown: false }}
                />

                {/* <Stack.Screen
                  name="MapScreen"
                  component={MapScreen}
                  options={{ headerShown: false }}
                /> */}
                <Stack.Screen
                  name="PersonalDocuments"
                  component={PersonalDocuments}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="VehicleDocuments"
                  component={VehicleDocuments}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="SubscriptionPlan"
                  component={SubscriptionPlan}
                  options={{ headerShown: false }}
                />

                <Stack.Screen
                  name="Reset"
                  component={Reset}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="PhoneNumber"
                  component={PhoneNumber}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Otp"
                  component={Otp}
                  options={{ headerShown: false }}
                />
                <Stack.Screen name="Gated" component={Gated} />
                <Stack.Screen
                  name="BankDetails"
                  component={BankDetails}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="AddVehicle"
                  component={AddVehicle}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="SwitchServiceType"
                  component={SwitchServiceType}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="ThankYouCard"
                  component={ThankYouCard}
                  options={{ headerShown: false }}
                />
              </>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </AuthContext.Provider>
    </Provider>
  );
}
