<template>
  <div id="app">
    <splash v-if="!removedSplash" :active="showSplash" />
    <transition
      :name="transitionName"
      :mode="transitionMode"
      v-on:enter="$defaultEnterTransition"
      v-if="!showSplash"
      >
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import WebFont from 'webfontloader'
import moment from 'moment'
import { mapGetters } from 'vuex'
import { Splash } from './components/pieces'
import './icons'
export default {
  name: 'app',
  components: { Splash },
  head: {
    title () {
      return {
        complement: this.$t('slogan'),
        inner: this.$t('siteName')
      }
    }
  },
  created () {
    moment.locale(this.currentLocale.locale)
    WebFont.load({
      google: {
        families: [
          'Hind+Madurai:300,400,500,600,700',
          'Lobster'
        ]
      }
    })
    setTimeout(() => {
      this.$store.dispatch('checkLogin').then(() => {
        this.removeSplash()
      })
    }, 1000)
  },
  computed: {
    ...mapGetters({
      transitionName: 'getTransitionName',
      transitionMode: 'getTransitionMode',
      currentLocale: 'getCurrentLocale'
    })
  },
  data () {
    return {
      showSplash: true,
      removedSplash: false
    }
  },
  methods: {
    removeSplash () {
      this.showSplash = false
      setTimeout(() => {
        this.removedSplash = true
      }, 1000)
    }
  }
}
</script>

<style lang="sass">
@import 'sass/styles'
</style>
