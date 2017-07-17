<template>
  <div :class="cssClasses" v-if="active" @click="closeNotification" @mouseover="removeTimeout">
    <icon icon="close" />
    <span>{{ notification.message }}</span>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'notification',
  props: {
    duration: { type: Number, default: 3000 }
  },
  computed: {
    ...mapGetters({
      notification: 'getNotification'
    }),
    cssClasses () {
      return {
        'alert': true,
        'alert-fixed': true,
        'alert-info': this.notification.type !== 'error',
        'alert-danger': this.notification.type === 'error',
        'leave': this.leave
      }
    },
    active () {
      let active = !!this.notification.message
      if (active) {
        clearInterval(this.interval)
        this.interval = setTimeout(this.closeNotification, this.duration)
      }
      return active
    }
  },
  data () {
    return {
      leave: false
    }
  },
  methods: {
    closeNotification () {
      this.leave = true
      setTimeout(() => {
        this.leave = false
        this.$store.dispatch('cleanNotification')
      }, 200)
    },
    removeTimeout () {
      clearInterval(this.interval)
    }
  }
}

</script>
