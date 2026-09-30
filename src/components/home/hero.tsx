import { ImageBackground, StyleSheet, Text, View } from "react-native";

import { appFont } from "@/constants/theme";
import { useAppTheme } from "@/contexts/theme-context";

/** Presentación inmersiva construida sobre ImageBackground, View y Text. */
export function Hero() {
  const { colors } = useAppTheme();

  return (
    <ImageBackground
      imageStyle={styles.image}
      source={require("@/assets/images/logo-glow.png")}
      style={[styles.background, { borderColor: colors.border }]}
    >
      <View
        style={[styles.overlay, { backgroundColor: `${colors.background}E8` }]}
      >
        <Text selectable style={[styles.kicker, { color: colors.accent }]}>
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
    minHeight: 242,
    overflow: "hidden",
    width: "100%",
  },
  image: {
    opacity: 0.45,
    resizeMode: "cover",
  },
  overlay: {
    flex: 1,
    gap: 12,
    justifyContent: "flex-end",
    padding: 22,
  },
  kicker: {
    fontFamily: appFont,
    fontSize: 12,
    fontWeight: "900",
    letterSpacing: 1.4,
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
