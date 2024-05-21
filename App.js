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
