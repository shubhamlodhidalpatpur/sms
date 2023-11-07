import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'url'
// import autoprefixer from 'autoprefixer'
// import postcssRtl from 'postcss-rtl'

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
        vue(),
    ],
    // css: {
    //     postcss: {
    //       plugins: [autoprefixer, postcssRtl],
    //     },
    //     preprocessorOptions: {
    //       sass: {
    //         sassOptions: {
    //           includePaths: ['./node_modules', './src/assets']
    //         }
    //       }
    //     }
    //   },

    resolve: {
        alias: {
            vue: '@vue/compat',
            '~': fileURLToPath(new URL('./resources/js/src/', import.meta.url)),
            '@': fileURLToPath(new URL('./resources/js/src/', import.meta.url)),
            '@themeConfig': fileURLToPath(new URL('./resources/js/themeConfig.js', import.meta.url)),
            '@core': fileURLToPath(new URL('./resources/js/src/@core/', import.meta.url)),
            '~@core': fileURLToPath(new URL('./resources/js/src/@core/', import.meta.url)),
            '@validations': fileURLToPath(new URL('./resources/js/src/@core/utils/validations/validations.js', import.meta.url)),
            '@axios': fileURLToPath(new URL('./resources/js/src/libs/axios', import.meta.url)),
        }
    },
});
