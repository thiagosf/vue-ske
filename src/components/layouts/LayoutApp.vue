<template>
  <div class="layout-app">
    <app-header />
    <app-sidebar />
    <app-content>
      <notification />
      <transition
        :name="transitionName"
        :mode="transitionMode"
        v-on:enter="$defaultEnterTransition"
        >
        <router-view />
      </transition>
    </app-content>
    <app-footer />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { AppHeader, AppContent, AppSidebar, Notification, AppFooter } from '../pieces'
export default {
  name: 'layout-app',
  components: { AppHeader, AppContent, AppSidebar, Notification, AppFooter },
  computed: {
    ...mapGetters({
      transitionName: 'getTransitionName',
      transitionMode: 'getTransitionMode',
      currentLocale: 'getCurrentLocale'
    })
  }
}
</script>
