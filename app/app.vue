<script setup lang="ts">
useHead({
  htmlAttrs: { lang: 'en' },
  link: [
    { rel: 'icon', href: '/icon.png' },
    { rel: 'apple-touch-icon', href: '/icon.png' },
    { rel: 'msapplication-TileImage', href: '/icon.png' },
  ],
});

useSeoMeta({
  title: 'dEagle Habits',
  description: 'A minimalistic habit tracker application to track and manage your daily habits with ease',
  ogTitle: 'dEagle Habits',
  ogDescription: 'A minimalistic habit tracker application to track and manage your daily habits with ease',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  twitterCard: 'summary_large_image',
  ogImage: '/social-card.png',
  twitterImage: '/social-card.png',
  ogType: 'website',
  ogUrl: 'https://deaglehabits.nuxt.dev/',
  ogSiteName: 'dEagle Habits',
  twitterCreator: '',
  twitterSite: '',
  robots: 'index, follow',
  keywords: 'habit, habits, tracker, daily, habits, management, tool, minimalistic',
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
