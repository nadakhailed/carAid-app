/*
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LanguageSelectionScreen from "./screens/LanguageSelection";
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
import Gated from "./screens/Gated";
import HomeScreen from "./screens/HomeScreen";
import MapScreen from "./screens/MapScreen";
import BankDetails from "./screens/BankDetails";
import SwitchServiceType from "./screens/SwitchServiceType";
import ThankYouCard from "./screens/ThankYouCard";

import { Provider } from "react-redux";

import { store } from "./app/store";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="LanguageSelection">
          <Stack.Screen
            name="LanguageSelection"
            component={LanguageSelectionScreen}
            options={{ headerShown: false }}
          />




          
          <Stack.Screen
            name="WelcomeScreen"
            component={WelcomeScreen}
            options={{ headerShown: false }}
          />
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
            name="MapViewNearby"
            component={MapViewNearby}
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
            options={{ headerShown: false, headerTitle: "" }}
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
            name="HomeScreen"
            component={HomeScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="MapScreen"
            component={MapScreen}
            options={{
              headerShown: false,
            }}
          />
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
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
*/


import React, { useEffect, useState, useReducer, useMemo, createContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as SecureStore from "expo-secure-store";
import LanguageSelectionScreen from './screens/LanguageSelection';
import WelcomeScreen from './screens/WelcomeScreen';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Reset from './screens/Reset';
import PhoneNumber from './screens/PhoneNumber';
import Otp from './screens/Otp';
import PersonalDocuments from './screens/PersonalDocument';
import AddVehicle from './screens/AddVehicle';
import VehicleDocuments from './screens/VehicleDocuments';
import SubscriptionPlan from './screens/SubscriptionPlan';
import MapViewNearby from './screens/MapViewNearby';
import Gated from './screens/Gated';
import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';
import BankDetails from './screens/BankDetails';
import SwitchServiceType from './screens/SwitchServiceType';
import ThankYouCard from './screens/ThankYouCard';
import axios from "axios";
import { Provider } from 'react-redux';
import { store } from './app/store';
import { LogBox } from 'react-native';

const Stack = createNativeStackNavigator();
const AuthContext = createContext();

export default function App() {
  const [state, dispatch] = useReducer(
    (prevState, action) => {
      switch (action.type) {
        case "RESTORE_TOKEN":
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case "SIGN_IN":
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case "SIGN_OUT":
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
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
        userToken = await SecureStore.setItemAsync("userToken");
      } catch (e) {
        console.error(e);
      }
      dispatch({ type: "RESTORE_TOKEN", token: userToken });
    };
    bootstrapAsync();
  }, []);

  const authContext = useMemo(
    () => ({
      signIn: async (data) => {
        dispatch({ type: "SIGN_IN", token: "dummy-auth-token" });
      },
      signOut: () => dispatch({ type: "SIGN_OUT" }),
      signUp: async (data) => {
        dispatch({ type: "SIGN_IN", token: "dummy-auth-token" });
      },
    }),
    []
  );

  LogBox.ignoreAllLogs();

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <Stack.Navigator>
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
                options={{ headerShown: false, headerTitle: "" }}
              />
            </>
          ) : (
            <>
             
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
                name="MapViewNearby"
                component={MapViewNearby}
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
                name="HomeScreen"
                component={HomeScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="MapScreen"
                component={MapScreen}
                options={{ headerShown: false }}
              />
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
  );
}
