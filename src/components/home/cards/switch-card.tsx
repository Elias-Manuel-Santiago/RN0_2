import * as React from "react";
import { StyleSheet, Switch, Text, View } from "react-native";

import { AppCard } from "@/components/ui/app-card";
import type { CardLayoutProps } from "@/components/home/cards/card-layout-props";
import { appFont } from "@/constants/theme";
import { useAppTheme } from "@/contexts/theme-context";

/** Expone un estado booleano mediante un Switch nativo. */
export function SwitchCard({ cardStyle }: CardLayoutProps) {
  const { colors } = useAppTheme();
  const [isEnabled, setIsEnabled] = React.useState(false);

  return (
    <AppCard
      containerStyle={cardStyle}
      description="Switch representa un estado booleano con el patrón de interruptor nativo."
      eyebrow="05 · ESTADO"
      title="Switch"
    >
      <View style={styles.row}>
        <View style={styles.copyContainer}>
          <Text selectable style={[styles.label, { color: colors.text }]}>
            {isEnabled
              ? "El switch está activo"
              : "El switch no está activo :("}
          </Text>
        </View>
        <Switch
          accessibilityLabel="Activar modo de estudio"
          onValueChange={setIsEnabled}
          thumbColor={colors.surface}
          trackColor={{ false: colors.surfaceMuted, true: colors.accent }}
          value={isEnabled}
        />
      </View>
    </AppCard>
  );
}

const styles = StyleSheet.create({
  row: {
    alignItems: "center",
    flexDirection: "row",
    gap: 14,
    justifyContent: "space-between",
  },
  copyContainer: { flex: 1, gap: 4 },
  label: { fontFamily: appFont, fontSize: 14, fontWeight: "900" },
  copy: { fontFamily: appFont, fontSize: 12, lineHeight: 18 },
});
