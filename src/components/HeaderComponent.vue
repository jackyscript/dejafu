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
    <a href="#main">Skip to main content</a>
  </header>
</template>

<style scoped></style>
