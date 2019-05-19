<template>
  <div id="app">
        

    <!-- Header
    ============================================= -->
    <header id="header" class="full-header dark">

      <div id="header-wrap">

        <div class="container clearfix">

          <div id="primary-menu-trigger"><i class="icon-reorder"></i></div>

          <!-- Logo
          ============================================= -->
          <div id="logo">
            <router-link to="/">
              <img src="https://i.imgur.com/1GOnylV.png" alt="Perfect Pairings">
            </router-link>        

<!--             <a href="index.html" class="retina-logo" data-dark-logo="images/logo-dark@2x.png"><img src="images/logo@2x.png" alt="Canvas Logo"></a> -->
          </div><!-- #logo end -->

          <!-- Primary Navigation
          ============================================= -->
          <nav id="primary-menu">

            <ul>
              <li><router-link to="/"><div>Home</div></router-link></li>
              <li><router-link to="/videos"><div>Videos</div></router-link></li>
              <li><router-link to="/foods"><div>Foods</div></router-link></li>
              <li><router-link to="/pairings"><div>Pairings</div></router-link></li>
              <li><router-link v-if="isLoggedIn()" to="/users/me"><div>Profile</div></router-link></li>
              <li><router-link v-if="!isLoggedIn()" to="/login"><div>Login</div></router-link></li>
            </ul>

            <!-- Featured Link
            ============================================= -->
            <div id="top-search">
              <router-link v-if="isLoggedIn()" to="/logout">Logout</router-link>
              <router-link v-else to="/signup"><span>Signup</span></router-link>
            </div><!-- #featured-link end -->

          </nav><!-- #primary-menu end -->

        </div>

      </div>

    </header><!-- #header end -->


    <router-view/>

    <!-- Footer
    ============================================= -->
    <footer id="footer" class="dark">

      <!-- Copyrights
      ============================================= -->
      <div id="copyrights">

        <div class="container clearfix">

          <div class="col_half"><!-- 
            <img src="images/footer-logo.png" alt="Footer Logo" class="footer-logo"> -->
          </div>

          <div class="col_half col_last tright">
            <div class="copyrights-menu copyright-links fright clearfix">
              <router-link to="/">Home</router-link>
              /
              <router-link to="/wines">Wine</router-link>
              /
              <router-link to="/foods">Food</router-link>
              /
              <router-link to="/pairings">Pairings</router-link>
              /
              <router-link to="users">Profile</router-link>
            </div>
            <div class="fright clearfix">
              <a href="#" class="social-icon si-small si-borderless nobottommargin si-facebook">
                <i class="icon-facebook"></i>
                <i class="icon-facebook"></i>
              </a>

              <a href="#" class="social-icon si-small si-borderless nobottommargin si-twitter">
                <i class="icon-twitter"></i>
                <i class="icon-twitter"></i>
              </a>

              <a href="#" class="social-icon si-small si-borderless nobottommargin si-gplus">
                <i class="icon-gplus"></i>
                <i class="icon-gplus"></i>
              </a>

              <a href="#" class="social-icon si-small si-borderless nobottommargin si-pinterest">
                <i class="icon-pinterest"></i>
                <i class="icon-pinterest"></i>
              </a>

              <a href="#" class="social-icon si-small si-borderless nobottommargin si-vimeo">
                <i class="icon-vimeo"></i>
                <i class="icon-vimeo"></i>
              </a>

              <a href="#" class="social-icon si-small si-borderless nobottommargin si-github">
                <i class="icon-github"></i>
                <i class="icon-github"></i>
              </a>

              <a href="#" class="social-icon si-small si-borderless nobottommargin si-yahoo">
                <i class="icon-yahoo"></i>
                <i class="icon-yahoo"></i>
              </a>

              <a href="#" class="social-icon si-small si-borderless nobottommargin si-linkedin">
                <i class="icon-linkedin"></i>
                <i class="icon-linkedin"></i>
              </a>
            </div>
          </div>

        </div>

      </div><!-- #copyrights end -->

    </footer><!-- #footer end -->

        

  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      user: {}
    };
  },
  // created: function() {
  //   axios.get("/api/users/me").then(response => {
  //     this.user = response.data;
  //     console.log(this.user);
  //   });
  // },
  methods: {
    isLoggedIn: function() {
      return localStorage.getItem("jwt");
    }
  }
};
</script>
