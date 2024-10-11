<template>
   <div>
       <h1 class="text-2xl font-bold mb-4">Favorite Recepies</h1>
       <RecipeList :recipes="store.FavoriteRecipes"/>
   </div>
</template>

<script setup lang="ts">
import RecipeList from '@/components/RecipeList.vue';
import { useRecipeStore } from '@/stores/recipe';

const store = useRecipeStore();
</script>