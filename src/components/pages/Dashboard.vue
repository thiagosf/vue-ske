<template>
  <div class="dashboard">
    <h1>{{ $t('links.dashboard') }}</h1>
    <div class="row">
      <div class="col-sm-4">
        <router-link :to="{ name: 'home' }" class="btn btn-default btn-block">
          {{ $t('links.home') }}
        </router-link>
        <router-link :to="{ name: 'about' }" class="btn btn-default btn-block">
          {{ $t('links.about') }}
        </router-link>
        <router-link :to="{ name: 'about' }" class="btn btn-primary btn-block">
          {{ $t('links.about') }}
        </router-link>
        <router-link :to="{ name: 'about' }" class="btn btn-warning btn-block">
          {{ $t('links.about') }}
        </router-link>
        <router-link :to="{ name: 'about' }" class="btn btn-danger btn-block">
          {{ $t('links.about') }}
        </router-link>
        <router-link :to="{ name: 'about' }" class="btn btn-info btn-block">
          {{ $t('links.about') }}
        </router-link>
        <router-link :to="{ name: 'about' }" class="btn btn-success btn-block">
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
export default {
  name: 'dashboard'
}
</script>
