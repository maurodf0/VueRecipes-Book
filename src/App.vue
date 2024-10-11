<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <header>
    <nav>
      <ul class="flex gap-4 p-8  text-white text-lg shadow-md rounded-b-lg bg-orange-400">

        <li>
          <RouterLink class="hover:underline hover:text-orange-800 transition duration-200" :to="{ name: 'home' }">Home</RouterLink>
        </li>

        <li>
          <RouterLink class="hover:underline hover:text-orange-800 transition duration-200" :to="{ name: 'Favorites' }">Favorites</RouterLink>
        </li>

        <li>
          <RouterLink class="hover:underline hover:text-orange-800 transition duration-200" :to="{ name: 'Add Recipe' }">Add Recipe</RouterLink>
        </li>
        
      </ul>
    </nav>
  </header>

  <main class="bg-orange-50 min-h-screen p-6">
    <RouterView />
  </main>
</template>

<style scoped>
/* Scoped styles can be left empty if we're fully utilizing Tailwind's utility classes */
</style>
