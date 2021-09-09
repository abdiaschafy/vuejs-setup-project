<template>
  <div class="home">
    <main class="flex-shrink-0">
      <navbar />
      <slot />
    </main>
  </div>
</template>

<script>
import Navbar from '../components/guest/Navbar'

export default {
  name: 'GuestLayout',
  components: {
    Navbar
  }
}
</script>

<style src="../assets/guest/style.css"></style>
