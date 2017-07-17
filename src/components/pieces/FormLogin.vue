<template>
  <div class="form-login-box">
    <form action="#" class="form-login" @submit.prevent="onSubmit">
      <div :class="formGroupClass('email')">
        <input
          type="text"
          name="email"
          class="form-control"
          v-model="model.email"
          v-validate="'required|email'"
          :placeholder="$t('modules.users.fields.email')"
          />
        <field-error :data="errors" field="email" />
      </div>
      <div :class="formGroupClass('password')">
        <input
          type="password"
          name="password"
          class="form-control"
          v-model="model.password"
          v-validate="'required'"
          :placeholder="$t('modules.users.fields.password')"
          />
        <field-error :data="errors" field="password" />
      </div>
      <div class="submit-box">
        <button-spinner primary block :disabled="sending">
          {{ $t('actions.enter') }}
        </button-spinner>
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import FieldError from './FieldError'
import ButtonSpinner from './ButtonSpinner'
import { handleError } from '../../helpers'
export default {
  name: 'form-login',
  components: { FieldError, ButtonSpinner },
  data () {
    return {
      model: {
        email: null,
        password: null
      },
      sending: false
    }
  },
  computed: {
    ...mapGetters({
      loggedIn: 'loggedIn'
    })
  },
  methods: {
    onSubmit () {
      this.sending = true
      this.$store.dispatch('cleanNotification')
      this.$validator.validateAll().then((valid) => {
        if (valid) {
          this.$store.dispatch('auth', this.model).then(() => {
            this.sending = false
            this.redirectToDashboard()
          }).catch(handleError.notify.bind(this))
        } else {
          this.sending = false
        }
      }).catch(handleError.notify.bind(this))
    }
  },
  created () {
    if (this.loggedIn) {
      this.redirectToDashboard()
    }
  }
}
</script>
