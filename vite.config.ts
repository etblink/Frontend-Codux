import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// Parse PORT from environment variable or fallback to a default port
const port = parseInt(process.env.PORT, 10) || 3000;

export default defineConfig({
    server: {
        host: true, // Listens on all local IPs and makes your development server accessible from the outside
        port: port, // Use the PORT environment variable or 3000 if not available
    },
    // Rest of your configuration
    plugins: [react(), svgr()],
});
