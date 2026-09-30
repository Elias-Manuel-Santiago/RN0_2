import { Stack } from "expo-router";

import { ThemeProvider, useAppTheme } from "@/contexts/theme-context";

/** Configura las rutas y el tema compartido por toda la aplicación. */
export default function RootLayout() {
  return (
    <ThemeProvider>
      <AppNavigator />
    </ThemeProvider>
  );
}

/** Mantiene visible y legible la barra del sistema en las pantallas del stack nativo. */
function AppNavigator() {
  const { colors, mode } = useAppTheme();

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        statusBarHidden: false,
        statusBarStyle: mode === "dark" ? "light" : "dark",
        contentStyle: { backgroundColor: colors.background },
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="listas" />
    </Stack>
  );
}
