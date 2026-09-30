import { Pressable, StyleSheet, Text } from "react-native";

import { AppCard } from "@/components/ui/app-card";
import type { CardLayoutProps } from "@/components/home/cards/card-layout-props";
import { appFont } from "@/constants/theme";
import { useAppTheme } from "@/contexts/theme-context";

type ModalCardProps = CardLayoutProps & { onOpen: () => void };

/** Abre el ejemplo de contenido superpuesto mediante Modal. */
export function ModalCard({ cardStyle, onOpen }: ModalCardProps) {
  const { colors } = useAppTheme();

  return (
    <AppCard
      containerStyle={cardStyle}
      description="Modal presenta contenido sobre la vista principal y se puede cerrar sin interrumpir el flujo."
      eyebrow="06 · CAPA"
      title="Modal"
    >
      <Pressable
        accessibilityRole="button"
        onPress={onOpen}
        style={({ pressed }) => [
          styles.action,
          {
            backgroundColor: pressed ? colors.surfaceMuted : colors.surface,
            borderColor: colors.border,
          },
        ]}
      >
        <Text style={[styles.actionText, { color: colors.text }]}>
          ABRIR MODAL
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
