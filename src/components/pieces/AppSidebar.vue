<template>
  <aside class="app-sidebar">
    <div class="wrapper">
      <nav>
        <ul>
          <li v-for="item in navItems">
            <router-link :to="{ name: item.name }">
              <icon :name="item.icon" />
              <span class="text">{{ $t(item.label) }}</span>
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </aside>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'app-sidebar',
  computed: {
    ...mapGetters({
      navItems: 'getAppNav'
    })
  },
  created () {
    this.$store.dispatch('appNavPermited')
  }
}
</script>
