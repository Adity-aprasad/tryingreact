import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons"; // Importing icons
import Home from "./src/Home";
import Profile from "./src/Profile";
import Tryapi from "./src/Tryapi";

const Tab = createBottomTabNavigator();

export default function App() {
  const [credentials, setCredentials] = useState({ username: "", password: "" });

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Profile") {
              iconName = focused ? "person" : "person-outline";
            } else if (route.name === "Tryapi") {
              iconName = focused ? "cloud" : "cloud-outline";
            }

            // Return the icon
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#FF5733", // Active tab color
          tabBarInactiveTintColor: "#888", // Inactive tab color
          tabBarStyle: {
            backgroundColor: "#f0f4f7", // Tab bar background
            borderTopWidth: 0,
            elevation: 10, // Shadow for Android
          },
          tabBarLabelStyle: {
            fontSize: 12,
          },
        })}
      >
        <Tab.Screen name="Home" component={Home} initialParams={{ setCredentials }} />
        <Tab.Screen name="Profile" component={Profile} initialParams={{ credentials }} />
        <Tab.Screen name="Tryapi" component={Tryapi} />
      </Tab.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
