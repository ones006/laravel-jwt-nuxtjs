<template>
  <div class="container">
    <div class="col-md-6 offset-md-3">
      <div class="card mt-4">
        <div class="card-header">
          <p>Register</p>
        </div>
        <div class="card-body">
          <form @submit.prevent="register">
            <div class="form-group">
              <label for>Name</label>
              <input
                v-model="name"
                type="text"
                class="form-control"
                :class="{ 'is-invalid': errors.name}"
                placeholder="Name"
              >
            </div>
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
                :class="{ 'is-invalid': errors.password}"
                placeholder="Password"
              >
            </div>
            <div class="form-group">
              <input type="submit" value="Register" class="btn btn-secondary w-100">
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
      form: {
        name: "",
        email: "",
        password: ""
      }
    };
  },
  /* methods: {
    async register() {
      await this.$axios.post("/auth/register", this.form);

      this.$auth.login({ data: this.form });

      this.$router.push({ name: "index" });
    }
  } */
  methods: {
    async register() {
      try {
        await this.$axios.post("/auth/register", {
          name: this.name,
          email: this.email,
          password: this.password
        });

        await this.$auth.login("local", {
          data: {
            email: this.email,
            password: this.password
          }
        });

        this.$router.push("index");
      } catch (e) {
        this.error = e.response.data.message;
      }
    }
  }
};
</script>
