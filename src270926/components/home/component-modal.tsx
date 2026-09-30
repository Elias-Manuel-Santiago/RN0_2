import { Button, Modal, Pressable, StyleSheet, Text, View } from "react-native";

import { appFont } from "@/constants/theme";
import { useAppTheme } from "@/contexts/theme-context";

type ComponentModalProps = {
  visible: boolean;
  onClose: () => void;
};

/** Modal accesible que superpone información sin utilizar alertas. */
export function ComponentModal({ visible, onClose }: ComponentModalProps) {
  const { colors } = useAppTheme();

  return (
    <Modal
      animationType="fade"
      onRequestClose={onClose}
      transparent
      visible={visible}
    >
      <View style={[styles.backdrop, { backgroundColor: colors.overlay }]}>
        <Pressable
          accessibilityLabel="Cerrar ventana"
          onPress={onClose}
          style={StyleSheet.absoluteFill}
        />
        <View
          accessibilityViewIsModal
          style={[
            styles.dialog,
            {
              backgroundColor: colors.surface,
              borderColor: colors.border,
              boxShadow: `8px 8px 0 ${colors.shadow}`,
            },
          ]}
        >
          <Text selectable style={[styles.title, { color: colors.text }]}>
            Modal abierto
          </Text>
          <Text selectable style={[styles.copy, { color: colors.text }]}>
            Este contenido está por encima de la pantalla principal. Tocá fuera
            o usá el botón para volver.
          </Text>
          <Button
            color={colors.accent}
            onPress={onClose}
            title="Cerrar modal"
          />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    padding: 24,
  },
  dialog: {
    borderRadius: 4,
    borderWidth: 2,
    gap: 16,
    maxWidth: 440,
    padding: 22,
    width: "100%",
  },
  title: {
    fontFamily: appFont,
    fontSize: 24,
    fontWeight: "900",
  },
  copy: {
    fontFamily: appFont,
    fontSize: 14,
    lineHeight: 21,
  },
});
