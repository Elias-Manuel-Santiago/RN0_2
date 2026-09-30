import * as React from "react";
import { useColorScheme } from "react-native";

import { themeColors } from "@/constants/theme";
import type { AppColors, ThemeMode } from "@/types/theme";

type ThemeContextValue = {
  mode: ThemeMode;
  colors: AppColors;
  toggleTheme: () => void;
};

const ThemeContext = React.createContext<ThemeContextValue | null>(null);

/** Provee el tema y permite alternarlo desde cualquier pantalla. */
export function ThemeProvider({ children }: React.PropsWithChildren) {
  const deviceTheme = useColorScheme();
  const [mode, setMode] = React.useState<ThemeMode>(
    deviceTheme === "dark" ? "dark" : "light",
  );

  const value = React.useMemo(
    () => ({
      mode,
      colors: themeColors[mode],
      toggleTheme: () =>
        setMode((currentMode) => (currentMode === "light" ? "dark" : "light")),
    }),
    [mode],
  );

  return <ThemeContext value={value}>{children}</ThemeContext>;
}

/** Devuelve el tema actual; solo se usa dentro de ThemeProvider. */
export function useAppTheme() {
  const context = React.use(ThemeContext);

  if (!context) {
    throw new Error("useAppTheme debe usarse dentro de ThemeProvider.");
  }

  return context;
}
