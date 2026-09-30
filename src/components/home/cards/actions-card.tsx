import * as React from "react";
import {
  ActivityIndicator,
  Button,
  Pressable,
  StyleSheet,
  Text,
} from "react-native";

import { AppCard } from "@/components/ui/app-card";
import type { CardLayoutProps } from "@/components/home/cards/card-layout-props";
import { appFont } from "@/constants/theme";
import { useAppTheme } from "@/contexts/theme-context";

/** Agrupa los controles de acción táctil y el indicador de carga. */
export function ActionsCard({ cardStyle }: CardLayoutProps) {
  const { colors } = useAppTheme();
  const [presses, setPresses] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleButtonPress = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 900);
  };

  return (
    <AppCard
      containerStyle={cardStyle}
      description="Pressable detecta toques en un contenedor. Button ofrece un botón básico adaptado a cada plataforma; al activarlo, ActivityIndicator comunica que una acción está en curso."
      eyebrow="04 · ACCIONES"
      title="Pressable + Button"
    >
      <Pressable
        accessibilityHint="Suma una interacción al contador"
        accessibilityRole="button"
        onPress={() => setPresses((currentPresses) => currentPresses + 1)}
        style={({ pressed }) => [
          styles.pressable,
          {
            backgroundColor: pressed ? colors.accentPressed : colors.accent,
            borderColor: colors.border,
            boxShadow: `${pressed ? 2 : 4}px ${pressed ? 2 : 4}px 0 ${colors.shadow}`,
            transform: [
              { translateX: pressed ? 2 : 0 },
              { translateY: pressed ? 2 : 0 },
            ],
          },
        ]}
      >
        <Text style={[styles.pressableText, { color: colors.surface }]}>
          TOCAR PRESSABLE · {presses}
        </Text>
      </Pressable>
      <Button
        color={colors.accent}
        disabled={isLoading}
        onPress={handleButtonPress}
        title="Probar Button"
      />
      {isLoading ? (
        <ActivityIndicator color={colors.accent} size="small" />
      ) : null}
    </AppCard>
  );
}

const styles = StyleSheet.create({
  pressable: {
    alignItems: "center",
    borderRadius: 2,
    borderWidth: 2,
    justifyContent: "center",
    minHeight: 48,
    paddingHorizontal: 14,
  },
  pressableText: {
    fontFamily: appFont,
    fontSize: 13,
    fontWeight: "900",
    letterSpacing: 0.25,
  },
});
