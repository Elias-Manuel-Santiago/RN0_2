import { FloatingAction } from "@/components/ui/floating-action";
import { useAppTheme } from "@/contexts/theme-context";

/** Acción flotante para alternar entre los dos temas de la app. */
export function ThemeToggle() {
  const { mode, toggleTheme } = useAppTheme();
  const nextTheme = mode === "dark" ? "claro" : "oscuro";

  return (
    <FloatingAction
      hint={`Cambia al modo ${nextTheme}`}
      label={`Cambiar al modo ${nextTheme}`}
      icon={mode === "dark" ? "☀" : "☾"}
      onPress={toggleTheme}
    />
  );
}
