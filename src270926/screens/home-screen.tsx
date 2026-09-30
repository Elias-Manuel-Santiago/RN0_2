import * as React from "react";
import {
  RefreshControl,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { router } from "expo-router";

import { appFont } from "@/constants/theme";
import { useAppTheme } from "@/contexts/theme-context";
import { ComponentModal } from "@/components/home/component-modal";
import { Hero } from "@/components/home/hero";
import { InteractiveCards } from "@/components/home/interactive-cards";
import { AppCard } from "@/components/ui/app-card";
import { ThemeToggle } from "@/components/ui/theme-toggle";

/** Pantalla principal: ScrollView con RefreshControl y los ejemplos introductorios. */
export function HomeScreen() {
  const { colors, mode } = useAppTheme();
  const [isRefreshing, setIsRefreshing] = React.useState(false);
  const [isModalVisible, setIsModalVisible] = React.useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 650);
  };

  return (
    <View style={[styles.screen, { backgroundColor: colors.background }]}>
      <StatusBar
        backgroundColor={colors.background}
        barStyle={mode === "dark" ? "light-content" : "dark-content"}
      />
      <ScrollView
        contentContainerStyle={styles.content}
        contentInsetAdjustmentBehavior="automatic"
        refreshControl={
          <RefreshControl
            colors={[colors.accent]}
            onRefresh={handleRefresh}
            refreshing={isRefreshing}
            tintColor={colors.accent}
          />
        }
        showsVerticalScrollIndicator={false}
      >
        <Hero />
        <AppCard
          description="StatusBar adapta los iconos de la barra superior al tema actual. Todo este recorrido vive dentro de ScrollView, para desplazarse cuando el contenido supera la pantalla."
          eyebrow="00 · CONTEXTO"
          title="StatusBar + ScrollView"
        >
          <Text
            selectable
            style={[styles.refreshTip, { color: colors.success }]}
          >
            Arrastrá hacia abajo en cualquier punto de este recorrido:
            RefreshControl añade la interacción pull-to-refresh.
          </Text>
        </AppCard>
        <View style={styles.intro}>
          <Text selectable style={[styles.introTitle, { color: colors.text }]}>
            RECORRIDO GUIADO
          </Text>
          <Text selectable style={[styles.introCopy, { color: colors.text }]}>
            Deslizá para aprender. Al llegar al final, arrastrá hacia abajo para
            probar RefreshControl.
          </Text>
        </View>
        <InteractiveCards
          onOpenModal={() => setIsModalVisible(true)}
          onShowLists={() => router.push("/listas")}
        />
        <Text selectable style={[styles.footer, { color: colors.text }]}>
          Hecho con componentes nativos de React Native.
        </Text>
      </ScrollView>
      <ThemeToggle />
      <ComponentModal
        onClose={() => setIsModalVisible(false)}
        visible={isModalVisible}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  content: {
    gap: 18,
    paddingBottom: 92,
    paddingHorizontal: 20,
    paddingTop: 18,
  },
  intro: {
    gap: 6,
    paddingHorizontal: 2,
  },
  refreshTip: {
    fontFamily: appFont,
    fontSize: 12,
    lineHeight: 18,
  },
  introTitle: {
    fontFamily: appFont,
    fontSize: 13,
    fontWeight: "900",
    letterSpacing: 1.1,
  },
  introCopy: {
    fontFamily: appFont,
    fontSize: 13,
    lineHeight: 19,
  },
  footer: {
    fontFamily: appFont,
    fontSize: 12,
    lineHeight: 18,
    paddingBottom: 16,
    textAlign: "center",
  },
});
