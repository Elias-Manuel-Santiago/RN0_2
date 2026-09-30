import { ImageBackground, StyleSheet, Text, View } from "react-native";

import heroBackground from "@/assets/images/logo-glow.png";
import { appFont } from "@/constants/theme";
import { useAppTheme } from "@/contexts/theme-context";

/** Presentación inmersiva construida sobre ImageBackground, View y Text. */
export function Hero() {
  const { colors } = useAppTheme();

  return (
    <ImageBackground
      imageStyle={styles.image}
      source={heroBackground}
      style={[
        styles.background,
        { backgroundColor: colors.background, borderColor: colors.border },
      ]}
    >
      <View
        style={[styles.overlay, { backgroundColor: `${colors.background}55` }]}
      >
        <Text
          selectable
          style={[
            styles.kicker,
            { color: colors.accent, backgroundColor: colors.surface },
          ]}
        >
          LABORATORIO RN
        </Text>
        <Text selectable style={[styles.title, { color: colors.text }]}>
          Componentes nativos, en acción.
        </Text>
        <Text selectable style={[styles.copy, { color: colors.text }]}>
          ImageBackground funciona como un View con una imagen de fondo: por eso
          esta introducción combina textura y contenido nativo.
        </Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    borderRadius: 4,
    borderWidth: 2,
    minHeight: 260,
    overflow: "hidden",
    width: "100%",
  },
  image: {
    opacity: 0.85,
    resizeMode: "cover",
  },
  overlay: {
    flex: 1,
    gap: 12,
    justifyContent: "flex-end",
    padding: 22,
  },
  kicker: {
    alignSelf: "flex-start",
    borderRadius: 2,
    fontFamily: appFont,
    fontSize: 12,
    fontWeight: "900",
    letterSpacing: 1.4,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  title: {
    fontFamily: appFont,
    fontSize: 31,
    fontWeight: "900",
    letterSpacing: -1.8,
    lineHeight: 36,
  },
  copy: {
    fontFamily: appFont,
    fontSize: 14,
    lineHeight: 21,
    maxWidth: 510,
  },
});
