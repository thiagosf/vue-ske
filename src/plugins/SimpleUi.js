const SimpleUi = {
  version: '1.0.0',
  install: function (Vue, options) {
    Vue.prototype.$defaultEnterTransition = function () {
      window.scrollTo(0, 0)
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
          let query = this.$route.query.query || null
          if (params) {
            try {
              params = JSON.parse(params)
            } catch (e) {
              params = null
            }
          }
          if (query) {
            try {
              query = JSON.parse(query)
            } catch (e) {
              query = null
            }
          }
          this.$router.push({ name: name, params: params, query: query })
        },
        changeLocale (locale) {
          this.$store.dispatch('setLocale', locale.locale)
        },
        localeClass (locale, others = []) {
          let classes = {
            active: locale.locale === this.currentLocale.locale
          }
          others.forEach((i) => {
            classes[i] = true
          })
          return classes
        }
      }
    })
  }
}

export default SimpleUi
