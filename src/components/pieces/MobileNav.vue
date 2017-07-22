<template>
  <div>
    <div class="mobile-nav-box">
      <div class="wrapper">
        <nav class="mobile-nav">
          <ul class="list-unstyled">
            <li>
              <router-link :to="{ name: 'home' }" @click.native="$emit('clickNavLink')">
                {{ $t('links.home') }}
              </router-link>
            </li>
            <li>
              <router-link :to="{ name: 'about' }" @click.native="$emit('clickNavLink')">
                {{ $t('links.about') }}
              </router-link>
            </li>
          </ul>
        </nav>
        <hr>
        <div class="languages-box">
          <div class="btn-group">
            <span
              v-for="locale in locales"
              @click="changeLocale(locale),$emit('clickNavLink')"
              :class="localeClass(locale, ['btn', 'btn-default', 'btn-sm'])"
              >
              {{ locale.name }}
            </span>
          </div>
        </div>
        <hr>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid doloremque ullam aliquam atque tenetur deleniti reprehenderit est vitae nostrum quia, rem soluta veritatis eveniet quas, sed autem necessitatibus dolorem non?</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid doloremque ullam aliquam atque tenetur deleniti reprehenderit est vitae nostrum quia, rem soluta veritatis eveniet quas, sed autem necessitatibus dolorem non?</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid doloremque ullam aliquam atque tenetur deleniti reprehenderit est vitae nostrum quia, rem soluta veritatis eveniet quas, sed autem necessitatibus dolorem non?</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid doloremque ullam aliquam atque tenetur deleniti reprehenderit est vitae nostrum quia, rem soluta veritatis eveniet quas, sed autem necessitatibus dolorem non?</p>
      </div>
    </div>
    <div class="under-box" @click="$emit('clickNavLink')"></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'mobile-nav',
  computed: {
    ...mapGetters({
      locales: 'getLocales',
      currentLocale: 'getCurrentLocale'
    })
  }
}
</script>
