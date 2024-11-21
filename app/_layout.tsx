import { Stack, Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "All cocktails",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="drinks"
        options={{
          title: "drinks",
          headerShown: false,
        }}
      />
      
    </Tabs>
  );
}
