import * as React from "react";
import {
  FlatList,
  Pressable,
  SectionList,
  StatusBar,
  StyleSheet,
  Text,
  View,
  VirtualizedList,
} from "react-native";
import { router } from "expo-router";

import { appFont } from "@/constants/theme";
import {
  flatListData,
  sectionListData,
  virtualizedListData,
  type ListItem,
} from "@/constants/list-data";
import { useAppTheme } from "@/contexts/theme-context";
import { ThemeToggle } from "@/components/ui/theme-toggle";

type ListKind = "flat" | "section" | "virtualized";

const listDetails: Record<ListKind, { title: string; description: string }> = {
  flat: {
    title: "FlatList",
    description:
      "Lista desplazable optimizada que renderiza los elementos visibles de una colección plana.",
  },
  section: {
    title: "SectionList",
    description:
      "Agrupa datos por secciones y muestra un encabezado antes de cada grupo.",
  },
  virtualized: {
    title: "VirtualizedList",
    description:
      "Componente de bajo nivel sobre el que se construyen las listas grandes de React Native.",
  },
};

/** Pantalla aislada para evitar anidar listas virtualizadas dentro de ScrollView. */
export function ListsScreen() {
  const { colors, mode } = useAppTheme();
  const [activeList, setActiveList] = React.useState<ListKind>("flat");
  const detail = listDetails[activeList];

  return (
    <View style={[styles.screen, { backgroundColor: colors.background }]}>
      <StatusBar
        backgroundColor={colors.background}
        barStyle={mode === "dark" ? "light-content" : "dark-content"}
      />
      <View style={[styles.header, { borderBottomColor: colors.border }]}>
        <Pressable
          accessibilityLabel="Volver al inicio"
          onPress={() => router.back()}
          style={styles.backButton}
        >
          <Text style={[styles.backText, { color: colors.accent }]}>
            ← VOLVER
          </Text>
        </Pressable>
        <Text selectable style={[styles.title, { color: colors.text }]}>
          LISTAS NATIVAS
        </Text>
        <Text selectable style={[styles.description, { color: colors.text }]}>
          {detail.description}
        </Text>
        <View style={styles.tabs}>
          {(Object.keys(listDetails) as ListKind[]).map((kind) => {
            const isActive = activeList === kind;
            return (
              <Pressable
                accessibilityRole="tab"
                accessibilityState={{ selected: isActive }}
                key={kind}
                onPress={() => setActiveList(kind)}
                style={[
                  styles.tab,
                  {
                    backgroundColor: isActive ? colors.accent : colors.surface,
                    borderColor: colors.border,
                  },
                ]}
              >
                <Text
                  style={[
                    styles.tabText,
                    { color: isActive ? colors.surface : colors.text },
                  ]}
                >
                  {listDetails[kind].title}
                </Text>
              </Pressable>
            );
          })}
        </View>
      </View>
      <View style={styles.listArea}>{renderList(activeList)}</View>
      <ThemeToggle />
    </View>
  );
}

function renderList(kind: ListKind) {
  if (kind === "section") {
    return <SectionExample />;
  }

  if (kind === "virtualized") {
    return <VirtualizedExample />;
  }

  return <FlatExample />;
}

/** Elemento visual compartido por las tres listas. */
function ListRow({ item }: { item: ListItem }) {
  const { colors } = useAppTheme();

  return (
    <View
      style={[
        styles.row,
        { backgroundColor: colors.surface, borderColor: colors.border },
      ]}
    >
      <Text selectable style={[styles.rowTitle, { color: colors.text }]}>
        {item.label}
      </Text>
      <Text selectable style={[styles.rowDetail, { color: colors.text }]}>
        {item.detail}
      </Text>
    </View>
  );
}

/** Demostración de FlatList. */
function FlatExample() {
  const { colors } = useAppTheme();

  return (
    <FlatList
      contentContainerStyle={styles.listContent}
      contentInsetAdjustmentBehavior="automatic"
      data={flatListData}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={
        <Text selectable style={[styles.listHint, { color: colors.success }]}>
          Solo los elementos visibles necesitan estar montados.
        </Text>
      }
      renderItem={({ item }) => <ListRow item={item} />}
      showsVerticalScrollIndicator={false}
    />
  );
}

/** Demostración de SectionList con encabezados por grupo. */
function SectionExample() {
  const { colors } = useAppTheme();

  return (
    <SectionList
      contentContainerStyle={styles.listContent}
      contentInsetAdjustmentBehavior="automatic"
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <ListRow item={item} />}
      renderSectionHeader={({ section }) => (
        <Text
          selectable
          style={[styles.sectionHeader, { color: colors.accent }]}
        >
          {section.title.toUpperCase()}
        </Text>
      )}
      sections={sectionListData}
      showsVerticalScrollIndicator={false}
      stickySectionHeadersEnabled={false}
    />
  );
}

/** Demostración explícita del componente base VirtualizedList. */
function VirtualizedExample() {
  const { colors } = useAppTheme();

  return (
    <VirtualizedList
      contentContainerStyle={styles.listContent}
      contentInsetAdjustmentBehavior="automatic"
      data={virtualizedListData}
      getItem={(data, index) => data[index]}
      getItemCount={(data) => data.length}
      initialNumToRender={5}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={
        <Text selectable style={[styles.listHint, { color: colors.success }]}>
          Probá desplazarte: esta lista administra su ventana de renderizado.
        </Text>
      }
      renderItem={({ item }) => <ListRow item={item} />}
      showsVerticalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  header: {
    borderBottomWidth: 2,
    gap: 9,
    paddingBottom: 14,
    paddingHorizontal: 20,
    paddingTop: 18,
  },
  backButton: {
    alignSelf: "flex-start",
    minHeight: 32,
    justifyContent: "center",
  },
  backText: {
    fontFamily: appFont,
    fontSize: 12,
    fontWeight: "900",
    letterSpacing: 0.5,
  },
  title: {
    fontFamily: appFont,
    fontSize: 25,
    fontWeight: "900",
    letterSpacing: -1,
  },
  description: {
    fontFamily: appFont,
    fontSize: 12,
    lineHeight: 18,
  },
  tabs: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginTop: 4,
  },
  tab: {
    borderRadius: 2,
    borderWidth: 2,
    minHeight: 36,
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  tabText: {
    fontFamily: appFont,
    fontSize: 11,
    fontWeight: "900",
  },
  listArea: {
    flex: 1,
  },
  listContent: {
    gap: 10,
    padding: 20,
    paddingBottom: 88,
  },
  listHint: {
    fontFamily: appFont,
    fontSize: 12,
    lineHeight: 18,
    marginBottom: 2,
  },
  row: {
    borderRadius: 3,
    borderWidth: 2,
    gap: 5,
    padding: 14,
  },
  rowTitle: {
    fontFamily: appFont,
    fontSize: 16,
    fontWeight: "900",
  },
  rowDetail: {
    fontFamily: appFont,
    fontSize: 12,
    lineHeight: 18,
  },
  sectionHeader: {
    fontFamily: appFont,
    fontSize: 13,
    fontWeight: "900",
    letterSpacing: 1,
    marginTop: 8,
  },
});
