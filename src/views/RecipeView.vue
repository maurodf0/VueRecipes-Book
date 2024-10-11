<template>
  <div v-if="recipe">
    <img class="mb-4" :src="recipe.image" alt="Recipe Image">
    <h1 class="text-2xl font-bold mb-4">{{ recipe.name }}</h1>
    <p>{{ recipe.description }}</p>
  </div>

  <div v-if="recipe" class="flex justify-between self-center mt-4 items-center">
    <RouterLink
      class="bg-white rounded-lg hover:bg-gray-100 border-gray-100 p-2"
      :to="{ name: 'Edit Recipe', params: { id: recipe.id } }"
    >
      Edit this Recipe
    </RouterLink>

    <div class="main-action flex gap-4">
      <button @click="toggleFavorite">
        {{ isFavorite ? 'Remove from favorites' : 'Add to Favorite' }}
      </button>

      <button @click="openModal">
        Remove this recipe
      </button>

      <button @click="router.push({ name: 'home' })">Back Home</button>
    </div>
    <NotificationList />
    <ModalDialog :isOpen="isModalOpen"  @delete="removeRecipe" @close="closeModal"/>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useRecipeStore } from '@/stores/recipe';
import { useNotificationStore } from '@/stores/notification';
import NotificationList from '@/components/NotificationList.vue';
import ModalDialog from '@/components/ModalDialog.vue';

const route = useRoute();
const router = useRouter();
const recipeStore = useRecipeStore();
const notificationStore = useNotificationStore();

const isModalOpen = ref(false);

const openModal = () => {
  isModalOpen.value = true;
}

const closeModal = () => {
  isModalOpen.value = false;
}

const recipe = computed(() => recipeStore.getRecipeById(route.params.id as string));

const isFavorite = computed(() => recipe.value ? recipeStore.isFavorite(recipe.value.id) : false);

const toggleFavorite = () => {
  if (recipe.value) {
    recipeStore.toggleFavorite(recipe.value.id);
  }
};

const removeRecipe = () => {
  if (recipe.value) {
    recipeStore.removeRecipe(recipe.value.id);
    notificationStore.addNotification('Your recipe is deleted');
    router.push({ name: 'home' });
  }
};
</script>
