import { useState } from "react";
import type { NativeScrollEvent, NativeSyntheticEvent } from "react-native";

/** Muestra la acción de subir mientras el contenido está por debajo del tope. */
export function useScrollPosition() {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const { contentOffset, contentInset } = event.nativeEvent;
    // En iOS el inicio puede tener un offset negativo por el área segura superior.
    setShowScrollToTop(contentOffset.y + (contentInset?.top ?? 0) > 0);
  };

  return {
    showScrollToTop,
    handleScroll,
    resetScrollPosition: () => setShowScrollToTop(false),
  };
}
