import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/sass/app.scss',
                'resources/js/app.js',
            ],
            refresh: true,
        })
    ],
    server: {
        host: 'localhost:3100',
        watch: {
            usePolling: true,
        },
    },
});
