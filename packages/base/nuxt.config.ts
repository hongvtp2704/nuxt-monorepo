import { createResolver } from '@nuxt/kit'
const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
    alias: { '~base': resolve('./') },
    components: [
        { path: '~base/components', prefix: 'Base' }
    ],
    modules: ['@nuxtjs/tailwindcss']
})
