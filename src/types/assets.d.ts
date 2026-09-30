/** Permite importar PNG locales como fuentes de imagen tipadas para React Native. */
declare module "*.png" {
  import type { ImageSourcePropType } from "react-native";

  const source: ImageSourcePropType;
  export default source;
}
