<template>
    <div class="wrapper-flex">
      <TitleItem>3. Сброс значений в Select </TitleItem>
      <div class="p-inputgroup">
        
        <MultiSelect v-model="selectedValues" :options="options" optionLabel="label" :placeholder="placeholder"/>
        <div class="p-inputgroup-addon" v-if="selectedValues.length > 0">
          <i class="pi pi-times" @click="resetSelectedValues"></i>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import MultiSelect from 'primevue/multiselect';
import TitleItem from './TitleItem.vue';
  const options = ref([
    { label: 'Option 1', value: 'Option 1' },
    { label: 'Option 2', value: 'Option 2' },
    { label: 'Option 3', value: 'Option 3' },
    { label: 'Option 4', value: 'Option 4' },
  ]);
  
  const selectedValues = ref([]);
  const placeholder = ref('Select an option');
  
  function resetSelectedValues() {
    selectedValues.value = [];
  }
  </script>