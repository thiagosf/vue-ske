<template>
  <div class="layout-base">
    <main-header></main-header>
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
    <main-footer></main-footer>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { MainHeader, MainContent, MainFooter, Notification } from '../pieces'
export default {
  name: 'layout-base',
  components: { MainHeader, MainContent, MainFooter, Notification },
  computed: {
    ...mapGetters({
      transitionName: 'getTransitionName',
      transitionMode: 'getTransitionMode',
      currentLocale: 'getCurrentLocale'
    })
  }
}
</script>
