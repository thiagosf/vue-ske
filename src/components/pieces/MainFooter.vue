<template>
  <footer class="main-footer">
    <div class="container-fluid">
      <p>
        🚀
        {{ $t('siteName') }}
        {{ year }}
      </p>
    </div>
  </footer>
</template>

<script>
import moment from 'moment'
export default {
  name: 'main-footer',
  computed: {
    year () {
      return moment().year()
    }
  }
}
</script>
