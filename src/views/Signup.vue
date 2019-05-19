<template>
  <div class="signup">

    <!-- Content
    ============================================= -->
    <section id="content">

      <div class="content-wrap">

        <div class="container clearfix">

          <div class="tabs divcenter nobottommargin clearfix" id="tab-login-register" style="max-width: 500px;">

            <div class="tab-container">

              <div class="tab-content clearfix" id="tab-register">
                <div class="card nobottommargin">
                  <div class="card-body" style="padding: 40px;">
                    <h3>Register for an Account</h3>



                    <form id="register-form" name="register-form" class="nobottommargin" v-on:submit.prevent="submit()">

                      <div class="col_full">
                        <label for="register-form-name">Name:</label>
                        <input type="text" id="register-form-name" name="register-form-name" v-model="name" class="form-control" />
                      </div>

                      <div class="col_full">
                        <label for="register-form-email">Email Address:</label>
                        <input type="text" id="register-form-email" name="register-form-email" v-model="email" class="form-control" />
                      </div>

                      <div class="col_full">
                        <label for="register-form-password">Choose Password:</label>
                        <input type="password" id="register-form-password" name="register-form-password" v-model="password" class="form-control" />
                      </div>

                      <div class="col_full">
                        <label for="register-form-repassword">Re-enter Password:</label>
                        <input type="password" id="register-form-repassword" name="register-form-repassword" v-model="passwordConfirmation" class="form-control" />
                      </div>

                      <div class="col_full nobottommargin">
                        <input type="submit" class="button button-3d button-black nomargin" id="register-form-submit" name="register-form-submit" value="Register Now">
                      </div>

                    </form>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section><!-- #content end -->

<!--     <div class="container">
      <form v-on:submit.prevent="submit()">
        <h1>Signup</h1>
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="form-group">
          <label>Name:</label> 
          <input type="text" class="form-control" v-model="name">
        </div>
        <div class="form-group">
          <label>Email:</label>
          <input type="email" class="form-control" v-model="email">
        </div>
        <div class="form-group">
          <label>Password:</label>
          <input type="password" class="form-control" v-model="password">
        </div>
        <div class="form-group">
          <label>Password confirmation:</label>
          <input type="password" class="form-control" <form v-on:submit.prevent="submit()">
        </div>
        <input type="submit" class="btn btn-primary" value="Submit">
      </form>
    </div> -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      name: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        name: this.name,
        email: this.email,
        password: this.password,
        password_confirmation: this.passwordConfirmation
      };
      axios
        .post("/api/users", params)
        .then(response => {
          this.$router.push("/login");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>
