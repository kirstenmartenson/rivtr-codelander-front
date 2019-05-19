
<template>
  <div class="login">


    <!-- Content
    ============================================= -->
    <section id="content">

      <div class="content-wrap">

        <div class="container clearfix">

          <div class="tabs divcenter nobottommargin clearfix" id="tab-login-register" style="max-width: 500px;">

            <div class="tab-container">

              <div class="tab-content clearfix" id="tab-login">
                <div class="card nobottommargin">
                  <div class="card-body" style="padding: 40px;">
                    <form id="login-form" name="login-form" class="nobottommargin" v-on:submit.prevent="submit()">

                      <h3>Login to your Account</h3>

                      <ul>
                        <li class="text-danger" v-for="error in errors">{{ error }}</li>
                      </ul>

                      <div class="col_full">
                        <label for="login-form-username">Email:</label>
                        <input type="text" id="login-form-username" name="login-form-username" v-model="email" class="form-control" />
                      </div>

                      <div class="col_full">
                        <label for="login-form-password">Password:</label>
                        <input type="password" id="login-form-password" name="login-form-password" v-model="password" class="form-control" />
                      </div>

                      <div class="col_full nobottommargin">
                        <input type="submit" class="button button-3d button-black nomargin" id="login-form-submit" name="login-form-submit" value="Login">
                        <a href="#" class="fright">Forgot Password?</a>
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




  </div>
</template>


<script>
import axios from "axios";
export default {
  data: function() {
    return {
      email: "",
      password: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        email: this.email,
        password: this.password
      };
      axios
        .post("/api/sessions", params)
        .then(response => {
          axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          localStorage.setItem("user_id", response.data.user_id);
          this.$router.push("/users/me");
        })
        .catch(error => {
          this.errors = ["Invalid email or password."];
          this.email = "";
          this.password = "";
        });
    }
  }
};
</script>
