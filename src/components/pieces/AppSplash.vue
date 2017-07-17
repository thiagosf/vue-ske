<template>
  <div :class="cssClasses">
    <div class="center-fixed">
      <div class="wrapper">
        <div class="centered-box">
          <div class="logo-box">
            <icon icon="bug" />
            <span>{{ $t('siteName') }}</span>
          </div>
          <spinner active white></spinner>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Spinner from './Spinner'
export default {
  name: 'app-splash',
  components: { Spinner },
  computed: {
    cssClasses () {
      return {
        'app-splash': true,
        active: true,
        leave: !this.active
      }
    }
  },
  props: {
    active: { type: Boolean, default: false }
  }
}
</script>
