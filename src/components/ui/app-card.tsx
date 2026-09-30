import type { PropsWithChildren } from "react";
import {
  StyleSheet,
  Text,
  type StyleProp,
  View,
  type ViewStyle,
} from "react-native";

import { appFont } from "@/constants/theme";
import { useAppTheme } from "@/contexts/theme-context";

type AppCardProps = PropsWithChildren<{
  eyebrow: string;
  title: string;
  description: string;
  containerStyle?: StyleProp<ViewStyle>;
}>;

/** Tarjeta reutilizable con el borde y la sombra del diseño de referencia. */
export function AppCard({
  children,
  eyebrow,
  title,
  description,
  containerStyle,
}: AppCardProps) {
  const { colors } = useAppTheme();

  return (
    <View
      style={[
        styles.card,
        containerStyle,
        {
          backgroundColor: colors.surface,
          borderColor: colors.border,
          boxShadow: `7px 7px 0 ${colors.shadow}`,
        },
      ]}
    >
      <Text selectable style={[styles.eyebrow, { color: colors.accent }]}>
        {eyebrow}
      </Text>
      <Text selectable style={[styles.title, { color: colors.text }]}>
        {title}
      </Text>
      <Text selectable style={[styles.description, { color: colors.text }]}>
        {description}
      </Text>
      <View style={styles.content}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 4,
    borderWidth: 2,
    gap: 8,
    padding: 18,
    width: "100%",
  },
  eyebrow: {
    fontFamily: appFont,
    fontSize: 12,
    fontWeight: "900",
    letterSpacing: 1,
  },
  title: {
    fontFamily: appFont,
    fontSize: 21,
    fontWeight: "900",
    letterSpacing: -0.8,
  },
  description: {
    fontFamily: appFont,
    fontSize: 13,
    lineHeight: 20,
  },
  content: {
    gap: 12,
    marginTop: 5,
  },
});
