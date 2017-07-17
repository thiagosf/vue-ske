<template>
  <header class="app-header">
    App header
  </header>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'app-header',
  computed: {
    ...mapGetters({
      user: 'getUser',
      loggedIn: 'loggedIn'
    }),
    mobileNavbarClasses () {
      return {
        'collapse': true,
        'navbar-collapse': true,
        'in': this.openedNav
      }
    },
    navbarClasses () {
      return {
        'navbar': true,
        'navbar-fixed-top': true,
        'scrolled': this.scrolled || this.openedNav
      }
    }
  },
  data () {
    return {
      openedNav: false,
      scrolled: false
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('logout').then(_ => this.$router.push('/'))
    },
    toggleNav () {
      this.openedNav = !this.openedNav
    },
    handleScroll () {
      this.scrolled = window.scrollY > 10
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
    clearInterval(this.loadCompanyStatsInterval)
    clearInterval(this.getAppNotificationsInterval)
  }
}
</script>
