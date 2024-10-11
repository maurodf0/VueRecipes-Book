<template>
    <div class="max-w-lg mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 class="text-3xl font-bold mb-6 text-orange-700 text-center">Add Recipe</h1>
      <form class="space-y-6" @submit.prevent="addRecipe">
        <input 
          class="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition" 
          placeholder="Recipe Name" 
          type="text" 
          v-model="name" />
        <input 
          class="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition" 
          placeholder="Recipe Image Link" 
          type="text" 
          v-model="image" />
          
        <textarea 
          class="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition" 
          placeholder="Recipe Description" 
          v-model="description"></textarea>
          
        <button 
          class="w-full bg-gradient-to-r from-orange-600 to-orange-500 text-white font-semibold hover:from-orange-700 hover:to-orange-600 p-3 rounded-lg transition duration-300 ease-in-out transform hover:scale-105" 
          type="submit">
          Add Recipe
        </button>
      </form>
    </div>
  </template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import { useRecipeStore } from '@/stores/recipe';

const store = useRecipeStore();

const router = useRouter();

const name = ref('');
const description = ref('');
const image = ref();

    const addRecipe = () => {
        if(!name.value) {
            alert('missing info');
            return
        }
        if(!description.value) {
            alert('missing info');
            return
        }
        const recipe = store.addRecipe({
            name: name.value,
            image: image.value,
            description: description.value
        })
        router.push({
            name: 'Recipe',
            params: {
                id: recipe.id
            }
        })
    }
</script>