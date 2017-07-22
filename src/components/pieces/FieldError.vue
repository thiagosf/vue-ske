<template>
  <span class="help-block" v-if="data.has(field)">
    <icon v-if="icon" :icon="icon" />
    <span v-html="getErrors(field)" />
  </span>
</template>

<script>
export default {
  name: 'field-error',
  props: {
    data: Object,
    field: String,
    model: String,
    icon: String
  },
  methods: {
    getErrors (field) {
      let errors = []
      this.data.errors.forEach((item) => {
        if (item.field === field) {
          let key = `validations.${item.field}.${item.rule}`
          if (this.model) {
            key = `validations.users.${item.field}.${item.rule}`
          }
          errors.push(this.$t(key))
        }
      })
      return errors.join('\n')
    }
  }
}
</script>
