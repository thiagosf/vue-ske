const SimpleUi = {
  version: '1.0.0',
  install: function (Vue, options) {
    Vue.prototype.$defaultEnterTransition = function () {
      document.querySelector('body').scrollTop = 0
    }
    Vue.mixin({
      methods: {
        formGroupClass (field, others = []) {
          let classes = {
            'form-group': true,
            'has-error': this.errors.has(field)
          }
          others.forEach((i) => {
            classes[i] = true
          })
          return classes
        },
        redirectToDashboard () {
          let name = this.$route.query.redirect ? this.$route.query.redirect : 'app'
          let params = this.$route.query.params || null
          this.$router.push({ name: name, params: params })
        }
      }
    })
  }
}

export default SimpleUi
