import { Pressable, StyleSheet, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { appFont } from "@/constants/theme";
import { useAppTheme } from "@/contexts/theme-context";

type FloatingActionProps = {
  icon: string;
  label: string;
  hint: string;
  onPress: () => void;
  side?: "left" | "right";
};

/** Diseño compartido por las acciones flotantes, por encima del área del sistema. */
export function FloatingAction({
  icon,
  label,
  hint,
  onPress,
  side = "right",
}: FloatingActionProps) {
  const { colors } = useAppTheme();
  const insets = useSafeAreaInsets();

  return (
    <Pressable
      accessibilityHint={hint}
      accessibilityLabel={label}
      accessibilityRole="button"
      hitSlop={6}
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        {
          bottom: insets.bottom + 22,
          ...(side === "left"
            ? { left: insets.left + 20 }
            : { right: insets.right + 20 }),
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
      <Text style={[styles.icon, { color: colors.text }]}>{icon}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    borderRadius: 24,
    borderWidth: 2,
    height: 48,
    justifyContent: "center",
    position: "absolute",
    width: 48,
    zIndex: 20,
  },
  icon: { fontFamily: appFont, fontSize: 24, fontWeight: "900" },
});
