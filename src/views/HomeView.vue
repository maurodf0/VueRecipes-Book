


<template>
  <main>
    <h1 class="text-2xl font-bold mb-4">Recipe Book</h1>
    <div>
      <input class="p-2 border rounded mb-4 w-full" type="text" placeholder="Search Recipe" v-model="recipeStore.searchQuery">
    </div>
    <RecipeList  v-auto-animate :recipes="recipeStore.filteredRecipes" />

  </main>
</template>

<script setup lang="ts">
  import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
  import { RouterLink } from 'vue-router';
  import { useRecipeStore } from '@/stores/recipe';
  import { ref, computed } from 'vue';
  import RecipeList from '@/components/RecipeList.vue';

  const recipeStore = useRecipeStore();


</script>