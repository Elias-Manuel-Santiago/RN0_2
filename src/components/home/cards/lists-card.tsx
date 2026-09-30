import { Pressable, StyleSheet, Text } from "react-native";

import { AppCard } from "@/components/ui/app-card";
import type { CardLayoutProps } from "@/components/home/cards/card-layout-props";
import { appFont } from "@/constants/theme";
import { useAppTheme } from "@/contexts/theme-context";

type ListsCardProps = CardLayoutProps & { onShowLists: () => void };

/** Enlaza a la pantalla que compara las listas virtualizadas. */
export function ListsCard({ cardStyle, onShowLists }: ListsCardProps) {
  const { colors } = useAppTheme();

  return (
    <AppCard
      containerStyle={cardStyle}
      description="FlatList, SectionList y VirtualizedList renderizan datos desplazables de forma eficiente."
      eyebrow="07 · LISTAS"
      title="Listas optimizadas"
    >
      <Pressable
        accessibilityHint="Abre la pantalla con los tres tipos de listas"
        accessibilityRole="button"
        onPress={onShowLists}
        style={({ pressed }) => [
          styles.action,
          {
            backgroundColor: pressed ? colors.accentPressed : colors.accent,
            borderColor: colors.border,
            boxShadow: `${pressed ? 2 : 4}px ${pressed ? 2 : 4}px 0 ${colors.shadow}`,
          },
        ]}
      >
        <Text style={[styles.actionText, { color: colors.surface }]}>
          EXPLORAR LISTAS →
        </Text>
      </Pressable>
    </AppCard>
  );
}

const styles = StyleSheet.create({
  action: {
    alignItems: "center",
    borderRadius: 2,
    borderWidth: 2,
    justifyContent: "center",
    minHeight: 48,
    paddingHorizontal: 14,
  },
  actionText: {
    fontFamily: appFont,
    fontSize: 13,
    fontWeight: "900",
    letterSpacing: 0.25,
  },
});
