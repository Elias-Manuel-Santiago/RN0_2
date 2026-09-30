import * as React from "react";
import {
  ActivityIndicator,
  Button,
  Image,
  Pressable,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from "react-native";

import { appFont } from "@/constants/theme";
import { useAppTheme } from "@/contexts/theme-context";
import { AppCard } from "@/components/ui/app-card";

type InteractiveCardsProps = {
  onOpenModal: () => void;
  onShowLists: () => void;
};

/** Reúne ejemplos simples de los componentes interactivos de React Native. */
export function InteractiveCards({
  onOpenModal,
  onShowLists,
}: InteractiveCardsProps) {
  const { colors } = useAppTheme();
  const [name, setName] = React.useState("");
  const [isEnabled, setIsEnabled] = React.useState(false);
  const [presses, setPresses] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleButtonPress = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 900);
  };

  return (
    <>
      <AppCard
        description="View agrupa elementos y aplica Flexbox; Text muestra y estiliza cadenas."
        eyebrow="01 · BASE"
        title="View + Text"
      >
        <View
          style={[
            styles.demoBox,
            {
              backgroundColor: colors.surfaceMuted,
              borderColor: colors.border,
            },
          ]}
        >
          <Text selectable style={[styles.demoLabel, { color: colors.text }]}>
            Soy un View que organiza este contenido.
          </Text>
          <Text selectable style={[styles.demoCopy, { color: colors.text }]}>
            Text puede anidarse, cambiar de estilo y hacer seleccionable la
            información importante.
          </Text>
        </View>
      </AppCard>

      <AppCard
        description="Image muestra recursos locales o imágenes remotas. Esta usa un archivo incluido en la app."
        eyebrow="02 · MEDIA"
        title="Image"
      >
        <Image
          accessibilityLabel="Logotipo de Expo como ejemplo de imagen local"
          resizeMode="contain"
          source={require("@/assets/images/expo-logo.png")}
          style={[
            styles.image,
            {
              backgroundColor: colors.surfaceMuted,
              borderColor: colors.border,
            },
          ]}
        />
      </AppCard>

      <AppCard
        description="TextInput abre el teclado virtual y conserva lo que la persona escribe."
        eyebrow="03 · ENTRADA"
        title="TextInput"
      >
        <Text style={[styles.inputLabel, { color: colors.text }]}>
          ESCRIBÍ TU NOMBRE
        </Text>
        <TextInput
          accessibilityLabel="Tu nombre"
          autoCapitalize="words"
          onChangeText={setName}
          placeholder="Ej.: Ada Lovelace"
          placeholderTextColor={colors.text + "88"}
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

      <AppCard
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

      <AppCard
        description="Switch representa un estado booleano con el patrón de interruptor nativo."
        eyebrow="05 · ESTADO"
        title="Switch"
      >
        <View style={styles.switchRow}>
          <View style={styles.switchCopy}>
            <Text selectable style={[styles.demoLabel, { color: colors.text }]}>
              Modo de estudio
            </Text>
            <Text selectable style={[styles.demoCopy, { color: colors.text }]}>
              {isEnabled
                ? "Activo: se muestran las explicaciones."
                : "Inactivo: podés activarlo cuando quieras."}
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

      <AppCard
        description="Modal presenta contenido sobre la vista principal y se puede cerrar sin interrumpir el flujo."
        eyebrow="06 · CAPA"
        title="Modal"
      >
        <Pressable
          accessibilityRole="button"
          onPress={onOpenModal}
          style={({ pressed }) => [
            styles.outlineAction,
            {
              backgroundColor: pressed ? colors.surfaceMuted : colors.surface,
              borderColor: colors.border,
            },
          ]}
        >
          <Text style={[styles.outlineActionText, { color: colors.text }]}>
            ABRIR MODAL
          </Text>
        </Pressable>
      </AppCard>

      <AppCard
        description="FlatList, SectionList y VirtualizedList renderizan datos desplazables de forma eficiente."
        eyebrow="07 · LISTAS"
        title="Listas optimizadas"
      >
        <Pressable
          accessibilityHint="Abre la pantalla con los tres tipos de listas"
          accessibilityRole="button"
          onPress={onShowLists}
          style={({ pressed }) => [
            styles.pressable,
            {
              backgroundColor: pressed ? colors.accentPressed : colors.accent,
              borderColor: colors.border,
              boxShadow: `${pressed ? 2 : 4}px ${pressed ? 2 : 4}px 0 ${colors.shadow}`,
            },
          ]}
        >
          <Text style={[styles.pressableText, { color: colors.surface }]}>
            EXPLORAR LISTAS →
          </Text>
        </Pressable>
      </AppCard>
    </>
  );
}

const styles = StyleSheet.create({
  demoBox: {
    borderRadius: 2,
    borderWidth: 2,
    gap: 5,
    padding: 14,
  },
  demoLabel: {
    fontFamily: appFont,
    fontSize: 14,
    fontWeight: "900",
  },
  demoCopy: {
    fontFamily: appFont,
    fontSize: 12,
    lineHeight: 18,
  },
  image: {
    alignSelf: "stretch",
    borderRadius: 2,
    borderWidth: 2,
    height: 144,
    width: "100%",
  },
  inputLabel: {
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
  feedback: {
    fontFamily: appFont,
    fontSize: 12,
    lineHeight: 18,
  },
  pressable: {
    alignItems: "center",
    borderRadius: 2,
    borderWidth: 2,
    minHeight: 48,
    justifyContent: "center",
    paddingHorizontal: 14,
  },
  pressableText: {
    fontFamily: appFont,
    fontSize: 13,
    fontWeight: "900",
    letterSpacing: 0.25,
  },
  switchRow: {
    alignItems: "center",
    flexDirection: "row",
    gap: 14,
    justifyContent: "space-between",
  },
  switchCopy: {
    flex: 1,
    gap: 4,
  },
  outlineAction: {
    alignItems: "center",
    borderRadius: 2,
    borderWidth: 2,
    minHeight: 48,
    justifyContent: "center",
    paddingHorizontal: 14,
  },
  outlineActionText: {
    fontFamily: appFont,
    fontSize: 13,
    fontWeight: "900",
    letterSpacing: 0.25,
  },
});
