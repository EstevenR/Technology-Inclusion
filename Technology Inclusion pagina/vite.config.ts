import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "::",
    port: 8080,
    watch: {
      // Carpeta de capturas estáticas: no necesita hot-reload y OneDrive
      // deja archivos temporales ahí mientras sincroniza, lo que tumbaba a Vite.
      ignored: ["**/public/proyectos/**"],
    },
  },
  plugins: [react()],
  optimizeDeps: {
    exclude: ['framer-motion'],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "react": path.resolve(__dirname, "node_modules/react"),
      "react/jsx-runtime": path.resolve(__dirname, "node_modules/react/jsx-runtime"),
    },
  },
});
