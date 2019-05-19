<template>
  <div class="users-show">
  
  <!-- Content
    ============================================= -->
    <section id="content">

      <div class="content-wrap">

        <div class="container clearfix">

          <div class="fancy-title title-border">
            <h3>Your Profile</h3>
            <br>
            <h4 class="space-bottom-30">{{ user.name }}</h4>
          </div>
          

          <div class="fancy-title title-border">
            <h3>Your Favorite Videos</h3>
          </div>
          <!-- repeating element -->
          <div v-for="favorite in user.favorite_videos" class="col_one_third">

            <div class="team">
              <div class="team-image">
                <img :src="video.video_url" alt="Video">
              </div>
              <div class="team-desc">
                <div class="team-title"><h4>{{favorite.video.name}}</h4><span>{{favorite.video.name}}</span></div>
              </div>
            </div>

          </div>

          <div class="clear"></div>


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
      user: [],
      favorites: []
    };
  },
  created: function() {
    axios.get("/api/users/me").then(response => {
      console.log(response.data);
      this.user = response.data;
    });
  }
};
</script>
