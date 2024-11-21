import { Stack } from "expo-router";

export default function drinksLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "All drinks",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="details/[id]"
        options={{
          title: "detail",
          headerShown: false,
        }}
      />
    </Stack>
  );
}
