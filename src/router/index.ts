import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import FavoritesView from '@/views/FavoritesView.vue';
import AddRecipeView from '@/views/AddRecipeView.vue';
import RecipeView from '@/views/RecipeView.vue';
import NotFoundView from '@/views/NotFoundView.vue';
import EditRecipeView from '@/views/EditRecipeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      alias: ['/home', '/same'],
      component: HomeView
    },
    {
      //the old link which the redirect start
      path: '/redirect-home',
      //the new link, where the user's end
      redirect: '/home'
    },
    {
      path: '/favorites',
      name: 'Favorites',
      component: FavoritesView
    },
    {
      path: '/add-recipe',
      name: 'Add Recipe',
      component: AddRecipeView
    },
    {
      path: '/recipe/:id/edit',
      name: 'Edit Recipe',
      component: EditRecipeView
    },
  
    {
      path: '/recipe/:id',
      name: 'Recipe',
      component: RecipeView,
      alias: '/meal/:id'
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'Not Found',
      component: NotFoundView
    }
  
  ]
});

export default router;
