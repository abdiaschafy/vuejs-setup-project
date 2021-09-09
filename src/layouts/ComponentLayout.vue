<template>
  <div class="component">
    <slot />
    <createI18n />
  </div>
</template>

<script>
import { createI18n } from 'vue-i18n'

export default {
  name: 'ComponentLayout',
  components: {
    createI18n
  }
}
</script>
