<template>
  <div class="wrapper">
    <TitleItem> 1. Поле Link</TitleItem>
    <div class="wrapper-link" v-if="!isEditing && value">
      <a class="link" :href="value" target="_blank">{{ linkTitle }}</a>
      <i class="pi pi-pencil" @click="startEditing"></i>
    </div>

    <InputText v-else-if="isEditing" v-model="editValue" @blur="onBlur" @keydown.enter="onBlur" />
    <InputText v-else v-model="value" @click="startEditing" placeholder="https://" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import InputText from 'primevue/inputtext'
import TitleItem from './TitleItem.vue';

const value = ref('')
const editValue = ref('')
const isEditing = ref(false)
const linkTitle = ref('')

const startEditing = () => {
  isEditing.value = true
  editValue.value = value.value
}

const onBlur = async () => {
  isEditing.value = false
  value.value = editValue.value
  linkTitle.value = await getTitle(editValue.value)
}

const getTitle = async (url) => {
  if (!url) {
    return ''
  }
  try {
    const response = await fetch(url)
    const html = await response.text()
    const titleMatch = /<title>([^<]*)<\/title>/gi.exec(html)
    const title = titleMatch && titleMatch.length > 1 ? titleMatch[1] : ''
    return title
  } catch (error) {
    console.error(error)
    return url
  }
}
</script>

<style scoped>
i.pi-pencil {
  cursor: pointer;
}

.wrapper{
  margin-top: 20px;
}
.wrapper-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.link {
  padding-right: 10px;
}
</style>
