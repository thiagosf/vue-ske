<template>
  <div class="about">
    <h1>{{ $t('links.about') }}</h1>
    <router-link :to="{ name: 'home' }" class="btn btn-default btn-block">
      {{ $t('links.home') }}
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'about'
}
</script>
