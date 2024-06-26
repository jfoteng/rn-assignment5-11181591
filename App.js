import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, StyleSheet } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import MyCardsScreen from "./screens/MyCardsScreen";
import StatisticsScreen from "./screens/StatisticsScreen";
import SettingsScreen from "./screens/SettingsScreen";
import { ThemeContext, ThemeProvider } from "./ThemeContext";

// Custom TabBar Icon Component
const CustomTabBarIcon = ({ focused, icon }) => {
  const tintColor = focused ? "#0e50b5" : "gray";
  return (
    <Image
      source={icon}
      style={[styles.icon, { tintColor }]}
    />
  );
};

// Styles for the icon
const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
  iconFocused: {
    tintColor: "#0e50b5", // Add any specific styles for focused state
  },
});

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ focused }) => {
              let iconSource;

              if (route.name === "Home") {
                iconSource = require('./assets/home.png');
              } else if (route.name === "MyCards") {
                iconSource = require('./assets/mycards.png');
              } else if (route.name === "Statistics") {
                iconSource = require('./assets/statistics.png');
              } else if (route.name === "Settings") {
                iconSource = require('./assets/settings.png');
              }

              return <CustomTabBarIcon focused={focused} icon={iconSource} />;
            },
            tabBarActiveTintColor: "#0e50b5",
            tabBarInactiveTintColor: "gray",
            tabBarStyle: {
              paddingTop: -10,
              height: 70,
              backgroundColor: useContext(ThemeContext).theme === 'dark' ? '#000' : '#fff', // Optional: If you want a background color
              borderTopWidth: 0,
              elevation: 0,
              shadowOpacity: 0,
            },
            tabBarLabelStyle: {
              fontWeight: "bold",
              fontSize: 12,
              marginBottom: -10,
            },
          })}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="MyCards" component={MyCardsScreen} />
          <Tab.Screen name="Statistics" component={StatisticsScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
