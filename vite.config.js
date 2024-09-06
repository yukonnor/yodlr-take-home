import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    publicDir: "public",
    server: {
        port: 5173,
        proxy: {
            // Proxy any API requests to the NodeJS server during development
            "/users": "http://localhost:3000",
        },
    },
});
