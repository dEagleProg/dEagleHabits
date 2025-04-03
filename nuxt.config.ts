import pkg from './package.json';
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  future: { compatibilityVersion: 4 },
  modules: [
    '@nuxthub/core',
    'nuxt-auth-utils',
    '@pinia/nuxt',
    '@pinia/colada-nuxt',
    '@nuxt/ui',
    '@sidebase/nuxt-auth'
  ],
  hub: {
    database: true,
  },
  colorMode: {
    preference: 'dark',
  },
  runtimeConfig: {
    public: {
      version: pkg.version,
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    },
    auth: {
      secret: process.env.NUXT_SESSION_PASSWORD,
      origin: process.env.NUXT_AUTH_ORIGIN || 'http://localhost:3000',
      google: {
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      },
      github: {
        clientId: process.env.NUXT_OAUTH_GITHUB_CLIENT_ID,
        clientSecret: process.env.NUXT_OAUTH_GITHUB_CLIENT_SECRET,
        callbackUrl: `${process.env.NUXT_AUTH_ORIGIN}/api/auth/callback/github`
      }
    }
  },
  auth: {
    baseURL: process.env.NUXT_AUTH_ORIGIN || 'http://localhost:3000',
    provider: {
      type: 'authjs'
    }
  }
});
