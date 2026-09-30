import { Stack } from "expo-router";

import { ThemeProvider } from "@/contexts/theme-context";

/** Configura las rutas y el tema compartido por toda la aplicación. */
export default function RootLayout() {
  return (
    <ThemeProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="listas" />
      </Stack>
    </ThemeProvider>
  );
}
