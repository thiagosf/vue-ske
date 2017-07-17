<template>
  <div class="home">
    <h1>Home</h1>
    <div class="row">
      <div class="col-sm-4">
        <h2>Libs:</h2>
        <ul class="list-unstyled">
          <li v-for="item in libs">
            <icon icon="check" />
            {{ item }}
          </li>
        </ul>
        <hr>
        <router-link :to="{ name: 'about' }" class="btn btn-default btn-block">
          {{ $t('links.about') }}
        </router-link>
        <hr>
        <spinner white active />
      </div>
      <div class="col-sm-4">
        <form-login />
      </div>
      <div class="col-sm-4">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia voluptates laboriosam neque, odio amet facilis veniam quidem, corrupti voluptatibus voluptas magnam qui et repudiandae quos voluptatum. Tempora dolorem molestiae eum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia voluptates laboriosam neque, odio amet facilis veniam quidem, corrupti voluptatibus voluptas magnam qui et repudiandae quos voluptatum. Tempora dolorem molestiae eum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia voluptates laboriosam neque, odio amet facilis veniam quidem, corrupti voluptatibus voluptas magnam qui et repudiandae quos voluptatum. Tempora dolorem molestiae eum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia voluptates laboriosam neque, odio amet facilis veniam quidem, corrupti voluptatibus voluptas magnam qui et repudiandae quos voluptatum. Tempora dolorem molestiae eum.</p>
      </div>
    </div>
  </div>
</template>

<script>
import { Spinner, FormLogin } from '../pieces'
export default {
  name: 'home',
  components: { Spinner, FormLogin },
  data () {
    return {
      libs: [
        'vue-i18n',
        'vuex',
        'vee-validate',
        'vue-router',
        'vue-resource',
        'vue-head',
        'vue-cookie',
        'bootstrap'
      ]
    }
  }
}
</script>
