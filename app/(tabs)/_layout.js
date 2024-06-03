import React from "react";
import { StatusBar } from 'expo-status-bar'
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Tabs } from "expo-router";

import colors from "../config/colors";


export default function TabsLayout() {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: colors.white,
          tabBarStyle: { backgroundColor: colors.primary },
          headerStyle: { backgroundColor: colors.primary, borderWidth: 0 },
          headerTintColor: colors.white,
          headerStatusBarHeight: 0,
          headerTitle: "",
          //headerBackgroundContainerStyle: {borderColor: colors.primary},

        }}
      >
        <Tabs.Screen
          name="booking"
          options={{
            title: "Booking",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="calendar-check" size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="history"
          options={{
            title: "History",
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="history" size={28} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" size={28} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="setting"
          options={{
            title: "Setting",
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="settings" size={26} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="assist"
          options={{
            title: "Support",
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="support-agent" size={28} color={color} />
            ),
          }}
        />


      </Tabs>
      <StatusBar backgroundColor='white' style='light'/>
    </>
  );
}
