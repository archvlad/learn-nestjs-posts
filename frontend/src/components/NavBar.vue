<template>
  <nav class="navbar is-transparent mb-4">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <img
          src="https://bulma.io/images/bulma-logo.png"
          alt="Bulma: a modern CSS framework based on Flexbox"
          width="112"
          height="28"
        />
      </a>
      <div
        class="navbar-burger parent"
        data-target="navbarExampleTransparentExample"
        @click="handleNavBarBurger()"
      >
        <div class="child">
          <i class="fa-solid fa-bars"></i>
        </div>
      </div>
    </div>

    <div
      id="navbarExampleTransparentExample"
      class="navbar-menu"
      @click="closeNavBarBurger()"
    >
      <div class="navbar-start">
        <router-link class="navbar-item" to="/">Posts</router-link>
      </div>

      <div class="navbar-end" v-if="currentUser">
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            <router-link class="navbar-item" to="/profile">Profile</router-link>
          </a>
          <div class="navbar-dropdown is-boxed is-right">
            <a class="navbar-item" @click="logout">Logout</a>
          </div>
        </div>
      </div>
      <div class="navbar-end" v-else>
        <div class="navbar-item">
          <div class="buttons">
            <router-link class="button is-primary" to="/signup">
              <strong>Sign Up</strong>
            </router-link>
            <router-link class="button is-light" to="/login">
              Log In
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import $ from 'jquery';
export default {
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
  },
  methods: {
    handleNavBarBurger() {
      $('.navbar-burger').toggleClass('is-active');
      $('.navbar-menu').toggleClass('is-active');

      if ($('.navbar-burger').hasClass('is-active')) {
        $('.navbar-burger .child').html('<i class="fa-solid fa-xmark"></i>');
      } else {
        $('.navbar-burger .child').html('<i class="fa-solid fa-bars"></i>');
      }
    },
    closeNavBarBurger() {
      $('.navbar-burger').removeClass('is-active');
      $('.navbar-menu').removeClass('is-active');
      $('.navbar-burger .child').html('<i class="fa-solid fa-bars"></i>');
    },
    logout() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/login');
    },
  },
};
</script>

<style scoped>
.navbar-brand .navbar-item:first-child {
  padding-left: 0;
}
.navbar-menu:not(.is-active) .navbar-item:last-child {
  padding-right: 0;
}
.navbar-item:hover {
  background-color: unset;
  color: #485fc7;
}

.navbar-menu.is-active {
  background-color: #fff;
  box-shadow: 0 8px 16px rgba(10, 10, 10, 0.1);
  border-radius: 8px;
  padding: 0.5rem 0;
}
.parent {
  position: relative;
}
.child {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.navbar-burger:hover {
  background-color: unset;
}

.navbar-item img {
  max-height: unset;
}
</style>
