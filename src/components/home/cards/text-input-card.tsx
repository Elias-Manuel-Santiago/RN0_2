import * as React from "react";
import { StyleSheet, Text, TextInput } from "react-native";

import { AppCard } from "@/components/ui/app-card";
import type { CardLayoutProps } from "@/components/home/cards/card-layout-props";
import { appFont } from "@/constants/theme";
import { useAppTheme } from "@/contexts/theme-context";

/** Permite probar un TextInput y ver su estado en la misma tarjeta. */
export function TextInputCard({ cardStyle }: CardLayoutProps) {
  const { colors } = useAppTheme();
  const [name, setName] = React.useState("");

  return (
    <AppCard
      containerStyle={cardStyle}
      description="TextInput abre el teclado virtual y conserva lo que la persona escribe."
      eyebrow="03 · ENTRADA"
      title="TextInput"
    >
      <Text style={[styles.label, { color: colors.text }]}>
        ESCRIBÍ TU NOMBRE
      </Text>
      <TextInput
        accessibilityLabel="Tu nombre"
        autoCapitalize="words"
        onChangeText={setName}
        placeholder="Ej.: Ada Lovelace"
        placeholderTextColor={`${colors.text}88`}
        selectionColor={colors.accent}
        style={[
          styles.input,
          {
            backgroundColor: colors.surfaceMuted,
            borderColor: colors.border,
            color: colors.text,
          },
        ]}
        value={name}
      />
      <Text selectable style={[styles.feedback, { color: colors.success }]}>
        {name
          ? `¡Hola, ${name}! El valor cambió sin alertas.`
          : "Esperando una entrada de texto…"}
      </Text>
    </AppCard>
  );
}

const styles = StyleSheet.create({
  label: {
    fontFamily: appFont,
    fontSize: 12,
    fontWeight: "900",
    letterSpacing: 0.7,
  },
  input: {
    borderRadius: 2,
    borderWidth: 2,
    fontFamily: appFont,
    fontSize: 15,
    minHeight: 48,
    paddingHorizontal: 12,
  },
  feedback: { fontFamily: appFont, fontSize: 12, lineHeight: 18 },
});
