<template>
  <div class="wrapper-flex">
    <TitleItem>5. Таблица с поиском (расширенное задание)</TitleItem>
    <div class="p-inputgroup">
      <InputText v-model="searchText" placeholder="Search" @keyup.enter="search" />
      <Button
        icon="pi pi-times"
        class="p-button-secondary"
        v-if="searchText"
        @click="clearSearch"
      />
    </div>

    <DataTable
      :value="filteredProducts"
      :rows="10"
      :sortField="sortField"
      :sortMode="sortMode"
      :columns="visibleColumns"
    >
      <Column
        :field="field"
        :header="header"
        :sortable="true"
        v-for="{ field, header } in visibleColumns"
        :key="field"
      />
    </DataTable>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import TitleItem from './TitleItem.vue'

const products = ref([
  { code: 'P1000', name: 'Product 1', category: 'Category 1', price: 100 },
  { code: 'P1001', name: 'Product 2', category: 'Category 1', price: 200 },
  { code: 'P1002', name: 'Product 3', category: 'Category 2', price: 300 },
  { code: 'P1003', name: 'Product 4', category: 'Category 2', price: 400 }
])

const selectedFields = ref(['code', 'name', 'price'])
const searchText = ref('')

const filteredProducts = computed(() => {
  return products.value.filter((product) => {
    return selectedFields.value.some((field) => {
      const fieldValue = product[field]
      if (fieldValue) {
        return fieldValue.toString().toLowerCase().includes(searchText.value.toLowerCase())
      }
      return false
    })
  })
})

const visibleColumns = computed(() => {
  return selectedFields.value.map((field) => {
    return { field: field, header: field.charAt(0).toUpperCase() + field.slice(1) }
  })
})

let sortField = ref('code')
let sortMode = ref('single')

function search() {
  console.log('Search for:', searchText.value)
}

function clearSearch() {
  searchText.value = ''
}

</script>

<style scoped></style>
