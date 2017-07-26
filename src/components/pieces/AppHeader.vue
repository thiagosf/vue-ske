<template>
  <header class="app-header">
    <div class="container-fluid">
      <div class="logo-box">
        <router-link :to="{ name: 'dashboard' } ">
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
      <span class="open-close-nav" @click.prevent="$emit('toggleNav')">
        <span class="open-nav">
          <icon icon="menu" />
        </span>
        <span class="close-nav">
          <icon icon="close" />
        </span>
      </span>
    </div>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'app-header',
  computed: {
    ...mapGetters({
      locales: 'getLocales',
      currentLocale: 'getCurrentLocale'
    })
  }
}
</script>
