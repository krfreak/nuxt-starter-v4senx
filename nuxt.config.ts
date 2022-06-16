import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  nitro: {
    preset: 'node-server',
  },
  runtimeConfig: {
    public: {
      api: '',
      api2: 'https://jsonplaceholder.typicode.com/todos/1',
    },
  },
});
