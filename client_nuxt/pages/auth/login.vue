<template>
  <div class="container">
    <div class="col-md-6 offset-md-3">
      <div class="card mt-4">
        <div class="card-header">
          <p>Login</p>
        </div>
        <div class="card-body">
          <form @submit.prevent="login">
            <div class="form-group">
              <label for>email</label>
              <input
                v-model="email"
                type="email"
                class="form-control"
                :class="{ 'is-invalid': errors.email}"
                placeholder="Emails"
              >
            </div>
            <div class="form-group">
              <label for>Password</label>
              <input
                v-model="password"
                type="password"
                class="form-control"
                :class="{'is-invalid': errors.password}"
                placeholder="Password"
              >
            </div>
            <div class="form-group">
              <input type="submit" value="Login" class="btn btn-secondary w-100">
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  middleware: "guest",
  data() {
    return {
      email: "first@mail.com",
      password: "123456",
      error: null
    };
  },

  methods: {
    async login() {
      try {
        await this.$auth.loginWith("local", {
          data: {
            email: this.email,
            password: this.password
          }
        });

        // this.$router.push("/");
        this.$router.push(
          this.$route.query.redirect ? this.$route.query.redirect : "/"
        );
      } catch (e) {
        this.error = e.response.data.message;
      }
    }
  }
};
</script>
