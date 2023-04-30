<template>
  <div class="wrapper-flex">
    <TitleItem> 2. DateTime picker </TitleItem>
    <label for="time">Выберите время:</label>
    <Calendar v-model="selectedTime" id="time" timeOnly></Calendar>
    <p>Выбранное время: {{ formattedTime }}</p>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import Calendar from 'primevue/calendar'
import TitleItem from './TitleItem.vue'

const selectedTime = ref(new Date())

const formattedTime = computed(() => {
  const hours = selectedTime.value.getHours().toString().padStart(2, '0')
  const minutes = selectedTime.value.getMinutes().toString().padStart(2, '0')
  return `${hours}:${minutes}`
})
</script>
<style></style>
