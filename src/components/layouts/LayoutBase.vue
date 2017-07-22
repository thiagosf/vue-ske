<template>
  <div :class="layoutClass">
    <main-header v-on:toggleNav="toggleNav" />
    <mobile-nav v-on:clickNavLink="closeNav" />
    <main-content>
      <notification />
      <transition
        :name="transitionName"
        :mode="transitionMode"
        v-on:enter="$defaultEnterTransition"
        >
        <router-view />
      </transition>
    </main-content>
    <main-footer />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { MainHeader, MainContent, MainFooter, Notification, MobileNav } from '../pieces'
export default {
  name: 'layout-base',
  components: { MainHeader, MainContent, MainFooter, Notification, MobileNav },
  computed: {
    ...mapGetters({
      transitionName: 'getTransitionName',
      transitionMode: 'getTransitionMode',
      currentLocale: 'getCurrentLocale'
    }),
    layoutClass () {
      return {
        'layout-base': true,
        'reference-mobile-menu': true,
        'opened-nav': this.openedNav
      }
    }
  },
  data () {
    return {
      openedNav: false
    }
  },
  methods: {
    toggleNav () {
      this.openedNav = !this.openedNav
    },
    closeNav () {
      this.openedNav = false
    }
  }
}
</script>
