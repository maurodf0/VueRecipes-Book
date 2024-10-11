<template>
    <h1 class="text-3xl font-bold mb-6 text-orange-700 text-center">Edit Recipe</h1>
    <form @submit.prevent="editRecipe">
       <input class="mb-4 p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition" 
        placeholder="Recipe Name" 
        type="text" 
        v-model="name">
       <input 
          class="mb-4 p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition" 
          placeholder="Recipe Image Link" 
          type="text" 
          v-model="image" />
       <textarea 
       class="mb-4 p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition" 
       placeholder="Recipe Description"  v-model="description"></textarea><br><br>
       <button type="submit">Save changes</button>
    </form>
</template>

<script setup lang="ts">
import { useRoute, useRouter} from 'vue-router';
import { onMounted, ref } from 'vue';
import { useRecipeStore } from '@/stores/recipe';


const store = useRecipeStore();
const route = useRoute();
const router = useRouter();

const name = ref('');
const description = ref('');
const image = ref();

const fetchRecipe = () => {
    const id = route.params.id as string;
    const recipe = store.getRecipeById(id);
    if (recipe){
        name.value = recipe.name;
        description.value = recipe.description
        image.value = recipe.image
    } else {
        router.push({name: 'Not Found'})
    }
}

onMounted( fetchRecipe ); 

    const editRecipe = () => {
        const recipe = store.editRecipe({
            id: route.params.id as string,
            image: image.value,
            name: name.value,
            description: description.value
        })
        router.push({
            name: 'Recipe',
            params: {
                id: route.params.id as string
            }
        })
    }
</script>