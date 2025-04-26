<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <header class="container">
    <h1>{{ msg }}</h1>
  </header>
</template>

<style scoped></style>
