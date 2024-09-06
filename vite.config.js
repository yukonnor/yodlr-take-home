import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    build: {
        outDir: "public", // Output directory for the build
        rollupOptions: {
            input: "./src/main.jsx",
        },
    },
    server: {
        port: 3000,
        proxy: {
            // Proxy any API requests to the NodeJS server during development
            "/api": "http://localhost:3000",
        },
    },
});
