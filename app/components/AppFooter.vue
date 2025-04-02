<script setup lang="ts">
import { format } from 'date-fns';
const config = useRuntimeConfig();
const currentYear = format(new Date(), 'yyyy');
</script>

<template>
  <div class="mt-2 flex items-center justify-center gap-1 text-xs text-neutral-400">
    <a class="font-semibold transition hover:text-white" href="https://github.com/dEagleProg/dEagleHabits" target="_blank">dEagle Habits v{{ config.public.version }}</a>
    - by
    <a class="font-semibold transition hover:text-white" href="https://github.com/dEagleProg" target="_blank">dEagle</a>
    {{ currentYear }}
  </div>
</template>
