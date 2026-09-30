/** Datos simples para las tres variantes de lista de la demostración. */
export type ListItem = {
  id: string;
  label: string;
  detail: string;
};

export const flatListData: ListItem[] = [
  { id: "view", label: "View", detail: "Contenedor de diseño con Flexbox." },
  { id: "text", label: "Text", detail: "Muestra cadenas y estilos." },
  {
    id: "image",
    label: "Image",
    detail: "Renderiza imágenes locales o remotas.",
  },
  { id: "input", label: "TextInput", detail: "Captura texto con el teclado." },
  {
    id: "pressable",
    label: "Pressable",
    detail: "Detecta interacciones táctiles.",
  },
  { id: "modal", label: "Modal", detail: "Superpone contenido." },
];

export const sectionListData = [
  { title: "Contenido", data: flatListData.slice(0, 3) },
  { title: "Interacción", data: flatListData.slice(3) },
];

export const virtualizedListData: ListItem[] = Array.from(
  { length: 18 },
  (_, index) => ({
    id: `virtual-${index + 1}`,
    label: `Elemento virtual ${String(index + 1).padStart(2, "0")}`,
    detail:
      "VirtualizedList obtiene cada elemento cuando necesita renderizarlo.",
  }),
);
