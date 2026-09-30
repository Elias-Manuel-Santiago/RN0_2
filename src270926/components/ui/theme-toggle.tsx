import { Pressable, StyleSheet, Text } from "react-native";

import { appFont } from "@/constants/theme";
import { useAppTheme } from "@/contexts/theme-context";

/** Acción flotante para alternar entre los dos temas de la app. */
export function ThemeToggle() {
  const { colors, mode, toggleTheme } = useAppTheme();
  const nextTheme = mode === "dark" ? "claro" : "oscuro";

  return (
    <Pressable
      accessibilityHint={`Cambia al modo ${nextTheme}`}
      accessibilityLabel={`Cambiar al modo ${nextTheme}`}
      accessibilityRole="button"
      onPress={toggleTheme}
      style={({ pressed }) => [
        styles.button,
        {
          backgroundColor: colors.surface,
          borderColor: colors.border,
          boxShadow: `${pressed ? 2 : 4}px ${pressed ? 2 : 4}px 0 ${colors.shadow}`,
          transform: [
            { translateX: pressed ? 2 : 0 },
            { translateY: pressed ? 2 : 0 },
          ],
        },
      ]}
    >
      <Text style={[styles.icon, { color: colors.text }]}>
        {mode === "dark" ? "☀" : "☾"}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    borderRadius: 24,
    borderWidth: 2,
    bottom: 22,
    height: 48,
    justifyContent: "center",
    position: "absolute",
    right: 20,
    width: 48,
    zIndex: 20,
  },
  icon: {
    fontFamily: appFont,
    fontSize: 24,
    fontWeight: "900",
  },
});
