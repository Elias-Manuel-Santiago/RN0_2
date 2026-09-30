import { FloatingAction } from "@/components/ui/floating-action";

type ScrollToTopButtonProps = { visible: boolean; onPress: () => void };

/** Aparece al desplazarse y vuelve al inicio del contenedor activo. */
export function ScrollToTopButton({
  visible,
  onPress,
}: ScrollToTopButtonProps) {
  if (!visible) return null;

  return (
    <FloatingAction
      icon="↑"
      label="Volver arriba"
      hint="Desplaza el contenido hasta el inicio"
      onPress={onPress}
      side="left"
    />
  );
}
