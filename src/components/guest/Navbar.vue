<template>
  <nav
    class="navbar navbar-expand-lg navbar-color"
    :class="isActive ? 'fixed-top' : ''"
  >
    <div class="container-fluid px-5">
      <router-link class="navbar-brand" to="/">Start Bootstrap</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item p-2">
            <router-link class="nav-link" to="/">{{
              $t('navbar.home')
            }}</router-link>
          </li>
          <li class="nav-item p-2">
            <router-link class="nav-link" to="/book">{{
              $t('navbar.book')
            }}</router-link>
          </li>
          <li class="nav-item p-2">
            <a class="nav-link" href="#">{{ $t('navbar.about') }}</a>
          </li>
          <li class="nav-item p-2">
            <a class="nav-link" href="#">{{ $t('navbar.contact') }}</a>
          </li>
          <li class="nav-item p-2">
            <a
              class="nav-link btn btn-primary btn-lg px-4 me-sm-3"
              href="/dashboard"
              >{{ $t('navbar.dashboard') }}</a
            >
          </li>
          <li class="nav-item dropdown p-2">
            <a
              class="nav-link dropdown-toggle"
              id="navbarDropdownBlog"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              >{{ $t('navbar.language') }}</a
            >
            <ul
              class="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdownBlog"
            >
              <li
                v-for="(option, id) in options"
                :key="id"
                @click="setLanguage(option.code)"
              >
                <a
                  class="dropdown-item"
                  :class="{ active: option.code === currentLanguage() }"
                  >{{ $t(`language.${option.name}`) }}</a
                >
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
  name: 'navbar',
  data() {
    return {
      isActive: false
    }
  },
  props: {
    options: {
      type: Array,
      default: () => [
        {
          code: 'en',
          name: 'english'
        },
        {
          code: 'fr',
          name: 'french'
        }
      ]
    }
  },
  created() {
    window.addEventListener('scroll', this.handleScroll)
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 200) {
        this.isActive = true
      } else {
        this.isActive = false
      }
    },
    setLanguage(locale) {
      this.$root.$i18n.locale = locale
      localStorage.setItem('language', locale)
    },
    currentLanguage() {
      return this.$i18n.locale
    }
  }
}
</script>
