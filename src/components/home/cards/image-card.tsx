import { Image, StyleSheet } from "react-native";

import { AppCard } from "@/components/ui/app-card";
import type { CardLayoutProps } from "@/components/home/cards/card-layout-props";
import { useAppTheme } from "@/contexts/theme-context";

/** Muestra el uso de una imagen local dentro de React Native. */
export function ImageCard({ cardStyle }: CardLayoutProps) {
  const { colors } = useAppTheme();

  return (
    <AppCard
      containerStyle={cardStyle}
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
          { backgroundColor: colors.surfaceMuted, borderColor: colors.border },
        ]}
      />
    </AppCard>
  );
}

const styles = StyleSheet.create({
  image: {
    alignSelf: "stretch",
    borderRadius: 2,
    borderWidth: 2,
    height: 144,
    width: "100%",
  },
});
