<template>
  <div
    class="offcanvas offcanvas-start sidebar-nav bg-dark"
    tabindex="-1"
    id="sidebar"
  >
    <div class="offcanvas-body p-0">
      <nav class="navbar-dark">
        <ul class="navbar-nav">
          <li>
            <div class="text-muted small fw-bold text-uppercase px-3">CORE</div>
          </li>
          <li>
            <router-link to="/dashboard" class="nav-link px-3 active">
              <span class="me-2"><i class="bi bi-speedometer2"></i></span>
              <span>Dashboard</span>
            </router-link>
          </li>
          <li class="my-4"><hr class="dropdown-divider bg-light" /></li>
          <li>
            <div class="text-muted small fw-bold text-uppercase px-3 mb-3">
              Interfaces
            </div>
          </li>
          <li>
            <a
              class="nav-link px-3 sidebar-link"
              data-bs-toggle="collapse"
              href="#layouts"
            >
              <span class="me-2"><i class="bi bi-layout-split"></i></span>
              <span>Assets</span>
              <span class="ms-auto">
                <span class="right-icon">
                  <i class="bi bi-chevron-down"></i>
                </span>
              </span>
            </a>
            <div class="collapse" id="layouts">
              <ul class="navbar-nav ps-3">
                <li>
                  <router-link to="/vehicles" class="nav-link px-3">
                    <span class="me-2"><font-awesome-icon icon="car" /></span>
                    <span>Vehicles</span>
                  </router-link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sidebar'
}
</script>
