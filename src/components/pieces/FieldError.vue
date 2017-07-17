<template>
  <span class="help-block" v-if="data.has(field)">
    {{ data.first(field) }}
  </span>
</template>

<script>
export default {
  name: 'field-error',
  props: {
    data: Object,
    field: String,
    icon: {
      type: Boolean,
      default: true
    }
  }
}
</script>
