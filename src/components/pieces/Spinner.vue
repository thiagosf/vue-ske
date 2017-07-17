<template>
  <div :class="cssClasses">
    <span>
      <span></span>
    </span>
  </div>
</template>

<script>
export default {
  name: 'spinner',
  computed: {
    cssClasses () {
      return {
        'spinner': true,
        'active': this.active,
        'absolute': this.absolute,
        'full': this.full,
        'white': this.white
      }
    }
  },
  props: {
    active: { type: Boolean, default: false },
    absolute: { type: Boolean, default: false },
    full: { type: Boolean, default: false },
    white: { type: Boolean, default: false }
  }
}
</script>
