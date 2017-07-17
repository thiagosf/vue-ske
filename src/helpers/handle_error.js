export default {
  notify (error) {
    let message = this.$t('errors.internalServerError')
    if (error.message) {
      message = error.message
    } else if (error.body && error.body.message) {
      message = error.body.message
    }
    this.sending = false
    this.$store.dispatch('notify', {
      message: message,
      type: 'error'
    })
  }
}
