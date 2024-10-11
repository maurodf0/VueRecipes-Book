<template>
    <div 
    v-if="isOpen"
    class="fixed inset-0 bg-black bg-opacity-35 flex items-center justify-center"
    role="dialog"
    aria-model="true">
        <div class="bg-white p-5 rounded max-w-md w-full">
            <h2 class="text-xl text-center font-bold mb-4">Remove Recipe?</h2>
              <p class="text-center text-gray-700 mb-4">Do you want to cancel this recipe? <br> This process can't be undone</p>
                <div class="flex justify-center gap-2">
                <button 
                @click="emit('close')"
                class="bg-gray-300 hover:bg-gray-200 text-black px-4 py-2 rounded">
                Annulla
                </button>
                <button 
                @click="emit('delete')"
                class="bg-orange-600 hover:bg-black text-white px-4 py-2 rounded">
                Rimuovi
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { watch, ref } from 'vue';


const titleInput = ref<HTMLInputElement | null>(null);

const props = defineProps<{
    isOpen: boolean
}>();

const emit = defineEmits<{
    (e: 'close'): void
    (e: 'delete'): void
}>();


watch( () => props.isOpen, (isOpen) => {
    if(isOpen) {
        setTimeout(() => titleInput.value.focus(), 0);
    }
} )
</script>