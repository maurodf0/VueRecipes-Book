import { ref } from 'vue';
import { defineStore } from "pinia";

export const useNotificationStore = defineStore('notification', () => {
interface Notification {
    id: number,
    message: string
}

const notifications = ref<Notification[]>([]);

const addNotification = (message: string) => {
    const id = Date.now();
    notifications.value.push(
        {
            id,
            message
        }
    );

    setTimeout(() => removeNotification(id), 5000);
}

const removeNotification = (id: number) => {
    notifications.value = notifications.value.filter( n => n.id !== id);
}

return {
    removeNotification,
    addNotification
}

})
