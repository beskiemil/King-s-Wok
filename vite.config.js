import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    // vite config
    plugins: [react(), tsconfigPaths()],
    publicDir: "public",
    define: {
      __VITE_API_ENDPOINT__: JSON.stringify(env.VITE_API_ENDPOINT),
    },
  };
});

// export default defineConfig({
//   plugins: [react(), tsconfigPaths()],
//   publicDir: "public",
// });
