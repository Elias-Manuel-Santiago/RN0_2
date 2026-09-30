import * as React from "react";
import {
  RefreshControl,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import { router } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { appFont } from "@/constants/theme";
import { useAppTheme } from "@/contexts/theme-context";
import { ComponentModal } from "@/components/home/component-modal";
import { ComponentGallery } from "@/components/home/component-gallery";
import { Hero } from "@/components/home/hero";
import { AppCard } from "@/components/ui/app-card";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { ScrollToTopButton } from "@/components/ui/scroll-to-top-button";
import { useScrollPosition } from "@/hooks/use-scroll-position";

/** Pantalla principal: ScrollView con RefreshControl y los ejemplos introductorios. */
export function HomeScreen() {
  const { colors } = useAppTheme();
  const { width } = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const scrollRef = React.useRef<ScrollView>(null);
  const { showScrollToTop, handleScroll } = useScrollPosition();
  const [isRefreshing, setIsRefreshing] = React.useState(false);
  const [isModalVisible, setIsModalVisible] = React.useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 650);
  };

  return (
    <View style={[styles.screen, { backgroundColor: colors.background }]}>
      <StatusBar hidden={false} />
      {/* El área segura pertenece al contenedor: también protege el indicador de refresco. */}
      <View style={[styles.scrollViewport, { marginTop: insets.top }]}>
        <ScrollView
          ref={scrollRef}
          onScroll={handleScroll}
          scrollEventThrottle={16}
          contentContainerStyle={[
            styles.scrollContent,
            { paddingBottom: insets.bottom + 92 },
          ]}
          contentInsetAdjustmentBehavior="never"
          refreshControl={
            <RefreshControl
              colors={[colors.accent]}
              onRefresh={handleRefresh}
              progressViewOffset={12}
              refreshing={isRefreshing}
              tintColor={colors.accent}
            />
          }
          showsVerticalScrollIndicator={false}
        >
          <View
            style={[
              styles.content,
              { paddingHorizontal: width >= 720 ? 32 : 20 },
            ]}
          >
            <Hero />
            <AppCard
              description="StatusBar permite controlar la barra del celular con la hora, señal y batería. En esta app conserva la apariencia del sistema; en web no dibuja una barra. ScrollView permite desplazarse cuando el contenido supera la pantalla."
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
            <View style={styles.intro}></View>
            <ComponentGallery
              onOpenModal={() => setIsModalVisible(true)}
              onShowLists={() => router.push("/listas")}
            />
          </View>
        </ScrollView>
      </View>
      <ScrollToTopButton
        visible={showScrollToTop}
        onPress={() => scrollRef.current?.scrollTo({ y: 0, animated: true })}
      />
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
  scrollViewport: {
    flex: 1,
    overflow: "hidden",
  },
  scrollContent: {
    paddingBottom: 92,
  },
  content: {
    alignSelf: "center",
    gap: 18,
    paddingTop: 18,
    width: "100%",
    maxWidth: 1264,
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
