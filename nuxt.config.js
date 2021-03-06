// import dotenv from 'dotenv'
if (process.env.NODE_ENV !== "production") require("dotenv").config();

export default {

    ssr: false,
    env: {
        API_SECRET_KEY: process.env.API_SECRET_KEY,
        MAP_ACCESS_TOKEN: process.env.MAP_ACCESS_TOKEN
    },

    head: {
        title: 'warehouse',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            {
                rel: 'stylesheet',
                href: 'https://unpkg.com/element-ui/lib/theme-chalk/index.css',
            },
        ]
    },

    css: [
        '~/assets/css/main.css',
    ],

    loading: {
        color: '#223744',
        name: 'fading-circle',
        continuous: true,
        duration: 1200
    },
    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [
        '@/plugins/element-ui',
    ],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [],

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
        'bootstrap-vue/nuxt',
        '@nuxtjs/axios',
        '@nuxtjs/toast',
    ],


    // Axios module configuration (https://go.nuxtjs.dev/config-axios)
    axios: {
        https: false,
        progress: true,
        retry: { retries: 3 }
    },
    toast: {
        position: 'top-right',
        duration: 10000,
    },

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {
        transpile: [/^element-ui/],
    }
}