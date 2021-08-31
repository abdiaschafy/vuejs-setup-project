<template>
  <div class="dashboard">
    <main class="mt-5 pt-3">
      <navbar></navbar>
      <sidebar></sidebar>
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12">
            <h4>Dashboard</h4>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import navbar from '../../../components/admin/Navbar.vue'
import sidebar from '../../../components/admin/Sidebar.vue'

export default {
  name: 'Home',
  components: {
    navbar,
    sidebar
  }
}
</script>

<style src="../../../assets/admin/style.css"></style>
