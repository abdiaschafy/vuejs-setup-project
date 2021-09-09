<template>
  <div class="dashboard">
    <main class="mt-5 pt-3">
      <navbar></navbar>
      <sidebar></sidebar>
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12">
            <slot />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Navbar from '../components/admin/Navbar.vue'
import Sidebar from '../components/admin/Sidebar.vue'

export default {
  name: 'AdminLayout',
  components: {
    Navbar,
    Sidebar
  }
}
</script>

<style src="../assets/admin/style.css"></style>
