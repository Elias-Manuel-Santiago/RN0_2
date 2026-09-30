import type { AppColors, ThemeMode } from "@/types/theme";

/** Paleta tomada del proyecto web de referencia. */
export const themeColors: Record<ThemeMode, AppColors> = {
  light: {
    background: "#F4E7C5",
    surface: "#FFF4D6",
    surfaceMuted: "#EAD9AD",
    text: "#302A24",
    accent: "#B84A39",
    accentPressed: "#96392C",
    border: "#302A24",
    shadow: "#302A24",
    success: "#39704D",
    focus: "#2468A2",
    overlay: "rgba(0, 0, 0, 0.55)",
  },
  dark: {
    background: "#171522",
    surface: "#29243A",
    surfaceMuted: "#39314C",
    text: "#F8E7B7",
    accent: "#FF785D",
    accentPressed: "#FF9B85",
    border: "#F8E7B7",
    shadow: "#0B0910",
    success: "#8FD0A5",
    focus: "#9BCAFF",
    overlay: "rgba(0, 0, 0, 0.68)",
  },
};

/** Fuente monoespaciada disponible de forma nativa en ambas plataformas. */
export const appFont = "monospace";
