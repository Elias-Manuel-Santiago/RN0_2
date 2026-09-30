import { StyleSheet, Text, View } from "react-native";

import { AppCard } from "@/components/ui/app-card";
import type { CardLayoutProps } from "@/components/home/cards/card-layout-props";
import { appFont } from "@/constants/theme";
import { useAppTheme } from "@/contexts/theme-context";

/** Explica los dos componentes de contenido más básicos. */
export function ViewTextCard({ cardStyle }: CardLayoutProps) {
  const { colors } = useAppTheme();

  return (
    <AppCard
      containerStyle={cardStyle}
      description="View agrupa elementos y aplica Flexbox; Text muestra y estiliza cadenas."
      eyebrow="01 · BASE"
      title="View + Text"
    >
      <View
        style={[
          styles.demoBox,
          { backgroundColor: colors.surfaceMuted, borderColor: colors.border },
        ]}
      >
        <Text selectable style={[styles.label, { color: colors.text }]}>
          Soy un View que organiza este contenido.
        </Text>
        <Text selectable style={[styles.copy, { color: colors.text }]}>
          Text puede anidarse, cambiar de estilo y hacer seleccionable la
          información importante.
        </Text>
      </View>
    </AppCard>
  );
}

const styles = StyleSheet.create({
  demoBox: { borderRadius: 2, borderWidth: 2, gap: 5, padding: 14 },
  label: { fontFamily: appFont, fontSize: 14, fontWeight: "900" },
  copy: { fontFamily: appFont, fontSize: 12, lineHeight: 18 },
});
