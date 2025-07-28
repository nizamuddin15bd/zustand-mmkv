import useCartStore from "@/store/cartStore";
import { Tabs } from "expo-router";
import React from "react";
import { Text, TouchableOpacity } from "react-native";

const TabsLayout = () => {
  const { item } = useCartStore();
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Tabs One",
          headerRight: () => (
            <TouchableOpacity style={{ marginRight: 20 }}>
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>{item}</Text>
            </TouchableOpacity>
          ),
        }}
      />
      <Tabs.Screen
        name="notify"
        options={{
          title: "Tabs One",
          headerRight: () => (
            <TouchableOpacity style={{ marginRight: 20 }}>
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>{item}</Text>
            </TouchableOpacity>
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
