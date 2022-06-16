<script setup>
//

const config = useRuntimeConfig();

const endpoint = '/test/'

const {
  pending,
  error,
  data: todos,
} = await useAsyncData('todos', () => $fetch(config.public.apiBase + endpoint, {}));


onMounted(() => {
  refresh();
});

const refresh = () => refreshNuxtData('todos');
</script>

<template>
  <div v-if="pending">Loading ...</div>
  <div v-else-if="error">Error: {{ error }}</div>
  <div v-else>
    {{ todos }}
  </div>
</template>
