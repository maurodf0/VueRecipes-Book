<template>
    <Teleport to="body">
      <ol class="notification-list">
        <li v-for="notification in notifications" :key="notification.id" class="notification-item">
          <div class="text-sm font-semibold">
            {{ notification.message }}
          </div>
          <button class="notification-ack-button" @click="removeNotification(notification.id)">
            OK
          </button>
        </li>
      </ol>
    </Teleport>
  </template>
  
  <script setup lang="ts">
  import { useNotificationStore } from '@/stores/notification';
  
  const { notifications, removeNotification } = useNotificationStore();
  </script>
  
  <style scoped>
  .notification-list {
    position: fixed;
    top: 1rem;
    right: 1rem;
    z-index: 1000;
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .notification-item {
    background-color: #f0f0f0;
    padding: 1rem;
    margin-bottom: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .notification-ack-button {
    background: none;
    border: none;
    font-size: 1rem;
    cursor: pointer;
    margin-left: 1rem;
  }
  </style>
  