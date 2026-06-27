import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    // Gunakan '/portofilio-mine/' untuk GitHub Pages jika tidak pakai custom domain
    base: '/portofilio-mine/',
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
});
