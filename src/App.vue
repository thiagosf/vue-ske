<template>
  <div id="app">
    <app-splash v-if="!removedSplash" :active="showSplash"></app-splash>
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
import { AppSplash } from './components/pieces'
import './icons'
export default {
  name: 'app',
  components: { AppSplash },
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
          'Muli:300,300i,400,400i,600,600i,700'
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
