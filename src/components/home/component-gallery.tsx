import { StyleSheet, useWindowDimensions, View } from "react-native";

import { ActionsCard } from "@/components/home/cards/actions-card";
import { ImageCard } from "@/components/home/cards/image-card";
import { ListsCard } from "@/components/home/cards/lists-card";
import { ModalCard } from "@/components/home/cards/modal-card";
import { SwitchCard } from "@/components/home/cards/switch-card";
import { TextInputCard } from "@/components/home/cards/text-input-card";
import { ViewTextCard } from "@/components/home/cards/view-text-card";

type ComponentGalleryProps = {
  onOpenModal: () => void;
  onShowLists: () => void;
};

const MAX_CONTENT_WIDTH = 1200;
const GRID_GAP = 18;

/** Ordena las tarjetas en una, dos o tres columnas según el espacio disponible. */
export function ComponentGallery({
  onOpenModal,
  onShowLists,
}: ComponentGalleryProps) {
  const { width } = useWindowDimensions();
  const horizontalPadding = width >= 720 ? 32 : 20;
  const contentWidth = Math.min(
    width - horizontalPadding * 2,
    MAX_CONTENT_WIDTH,
  );
  const columns = contentWidth >= 960 ? 3 : contentWidth >= 600 ? 2 : 1;
  const cardWidth = (contentWidth - GRID_GAP * (columns - 1)) / columns;
  const cardStyle = { width: cardWidth };

  return (
    <View style={styles.grid}>
      <ViewTextCard cardStyle={cardStyle} />
      <ImageCard cardStyle={cardStyle} />
      <TextInputCard cardStyle={cardStyle} />
      <ActionsCard cardStyle={cardStyle} />
      <SwitchCard cardStyle={cardStyle} />
      <ModalCard cardStyle={cardStyle} onOpen={onOpenModal} />
      <ListsCard cardStyle={cardStyle} onShowLists={onShowLists} />
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: GRID_GAP,
    justifyContent: "flex-start",
    width: "100%",
  },
});
