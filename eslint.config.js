// Combina las reglas de Expo con Prettier para mantener calidad y formato consistentes.
const { defineConfig } = require("eslint/config");
const expoConfig = require("eslint-config-expo/flat");
const prettierRecommended = require("eslint-plugin-prettier/recommended");

module.exports = defineConfig([
  expoConfig,
  prettierRecommended,
  {
    ignores: ["dist/*", "example/**"],
  },
]);
