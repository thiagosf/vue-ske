<template>
  <header class="main-header">
    <div class="container-fluid">
      <div class="logo-box">
        <router-link :to="{ name: 'home' } ">
          <icon icon="bug" />
          {{ $t('siteName') }}
        </router-link>
        <span class="slogan">
          {{ $t('slogan') }}
        </span>
      </div>
      <div class="languages-box">
        <span
          v-for="locale in locales"
          @click="changeLocale(locale)"
          :class="localeClass(locale)"
          >
          {{ locale.name }}
        </span>
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'main-header',
  computed: {
    ...mapGetters({
      locales: 'getLocales',
      currentLocale: 'getCurrentLocale'
    })
  },
  methods: {
    changeLocale (locale) {
      this.$store.dispatch('setLocale', locale.locale)
    },
    localeClass (locale) {
      return {
        active: locale.locale === this.currentLocale.locale
      }
    }
  }
}
</script>
