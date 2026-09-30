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

/** Configura el fondo de las pantallas y mantiene visible la barra del sistema. */
function AppNavigator() {
  const { colors } = useAppTheme();

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        statusBarHidden: false,
        contentStyle: { backgroundColor: colors.background },
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="listas" />
    </Stack>
  );
}
