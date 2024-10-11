<template>
<div>
        <nav v-if="recipes.length > 0">
        <ul class="grid grid-cols-4 gap-4">
        <li class="hover:bg-gray-100  mb-2 bg-white p-4 rounded-t-lg" v-for="recipe in recipes" :key="recipe.id">
            <!--Works also with static link -->
            <RouterLink :to="{name: 'Recipe', params: { id: recipe.id }}"><img :src="recipe.image" class="w-full h-48 object-cover rounded-t-lg"></RouterLink>
            <RouterLink class="text-lg text-amber-600 hover:underline" :to="{name: 'Recipe', params: { id: recipe.id }}"> {{ recipe.name }}</RouterLink>
            <p>{{ recipe.description.slice(0, 90) }}</p>
            </li>
            
        </ul>
        </nav>
        <div v-else class="text-gray-800">
        Nothing found, you can add a recipe <RouterLink class="text-orange-600 hover:underline" :to="{name: 'Add Recipe'}">here</RouterLink>
        </div>
</div>
</template>

<script setup lang="ts">
    import type { Recipe } from '@/stores/recipe';
    import { RouterLink } from 'vue-router';

    defineProps<{
        recipes: Recipe[]
    }>();

</script>