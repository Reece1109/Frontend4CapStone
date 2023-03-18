<template>
  <div class="container my-5">
    <div class="row justify-content-center">
      <div class="col-md-8 col-lg-6">
        <div class="card">
          <div class="card-header bg-dark text-white">
            <h1 class="text-center mb-0">Login</h1>
          </div>
          <div class="card-body">
            <form @submit.prevent="login" class="needs-validation" novalidate>
              <div class="form-group">
                <label for="email">Email address</label>
                <input v-model="email" type="email" class="form-control" id="email" placeholder="Enter email" required>
                <div class="invalid-feedback">
                  Please enter a valid email address.
                </div>
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input v-model="password" type="password" class="form-control" id="password" placeholder="Password" required>
                <div class="invalid-feedback">
                  Please enter your password.
                </div>
              </div>
              <button type="submit" class="btn btn-primary btn-block">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login() {
      // perform login logic here, e.g. send login request to API
      console.log(`Logging in user with email ${this.email}`)
      console.log(`Password: ${this.password}`)
      // clear form data after login
      this.email = ''
      this.password = ''
    }
  }
}
</script>

<style>
.card {
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
}

.card-header {
  border-radius: 5px 5px 0px 0px;
}

.form-control:focus {
  border-color: #80bdff;
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

.invalid-feedback {
  display: none;
  color: #dc3545;
}

.form-control:invalid {
  border-color: #dc3545;
}

.form-control:invalid ~ .invalid-feedback {
  display: block;
}
</style>
