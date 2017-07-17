<template>
  <button :class="cssClasses">
    <span class="spinner-box">
      <spinner white active :full="false"></spinner>
    </span>
    <span class="text">
      <slot></slot>
    </span>
  </button>
</template>

<script>
import Spinner from './Spinner'
export default {
  name: 'button-spinner',
  components: { Spinner },
  props: {
    primary: Boolean,
    danger: Boolean,
    success: Boolean,
    warning: Boolean,
    info: Boolean,
    large: Boolean,
    small: Boolean,
    inverse: Boolean,
    left: Boolean,
    right: Boolean,
    block: Boolean,
    smallPadding: Boolean
  },
  computed: {
    cssClasses () {
      return {
        'btn': true,
        'btn-spinner': true,
        'btn-primary': this.primary,
        'btn-danger': this.danger,
        'btn-success': this.success,
        'btn-warning': this.warning,
        'btn-info': this.info,
        'btn-lg': this.large,
        'btn-sm': this.small,
        'btn-inverse': this.inverse,
        'btn-block': this.block,
        'pull-left': this.left,
        'pull-right': this.right,
        '--small-pad': this.smallPadding
      }
    }
  }
}
</script>
