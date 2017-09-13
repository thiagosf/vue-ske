<template>
  <div id="app">
    <splash v-if="!removedSplash" :active="showSplash" />
    <router-view v-if="!showSplash" />
  </div>
</template>

<script>
import WebFont from 'webfontloader'
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
