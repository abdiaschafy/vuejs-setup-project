<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#sidebar"
        aria-controls="offcanvasExample"
      >
        <span class="navbar-toggler-icon" data-bs-target="#sidebar"></span>
      </button>
      <router-link
        class="navbar-brand me-auto ms-lg-0 ms-3 text-uppercase fw-bold"
        to="/dashboard"
      >
        PolyTracking
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#topNavBar"
        aria-controls="topNavBar"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="topNavBar">
        <ul class="navbar-nav d-flex ms-auto">
          <li class="nav-item">
            <a class="nav-link" href="#">
              <i class="bi bi-bell position-relative">
                <!-- <span
                  class="
                    position-absolute
                    top-0
                    start-100
                    translate-middle
                    p-2
                    bg-danger
                    rounded-circle
                  "
                >
                  <span class="alert-content">
                    <span class="content-item">3</span>
                  </span>
                </span> -->
              </i>
            </a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle ms-2"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="bi bi-person-circle"></i>
            </a>
            <ul class="dropdown-menu dropdown-menu-end">
              <li><a class="dropdown-item" href="#">Logout</a></li>
              <li>
                <a class="dropdown-item" href="/">Home</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'navbar'
}
</script>
