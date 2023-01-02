import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // Tell Vite that all components starting with "br-" are webcomponents
          isCustomElement: (tag) => tag.startsWith("br-"),
        },
      },
    }),
  ],
});
