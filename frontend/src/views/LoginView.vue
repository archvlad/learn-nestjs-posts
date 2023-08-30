<template>
  <div style="max-width: 600px; margin: auto">
    <div class="field">
      <label class="label">Username</label>
      <div class="control has-icons-left">
        <input class="input" type="text" v-model="form.username" />
        <span class="icon is-small is-left"><i class="fas fa-user"></i></span>
      </div>
    </div>

    <div class="field">
      <label class="label">Password</label>
      <p class="control has-icons-left">
        <input class="input" type="password" v-model="form.password" />
        <span class="icon is-small is-left">
          <i class="fas fa-lock"></i>
        </span>
      </p>
    </div>

    <div class="field">
      <p class="control">
        <button class="button is-primary" @click="handleLogIn">Log In</button>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    async handleLogIn(event) {
      event.preventDefault();
      let res = await this.$store.dispatch('auth/login', {
        username: this.form.username,
        password: this.form.password,
      });
      console.log(res);
      if (res.accessToken) {
        this.$router.push('/profile');
      }
    },
  },
};
</script>
