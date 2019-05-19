<template>
  <div class="videos-show">

    <!-- Content
    ============================================= -->
    <section id="content">

      <div class="content-wrap">

        <div class="container clearfix">

          <!-- Portfolio Single Image
          ============================================= -->
          <div class="col_two_third portfolio-single-image nobottommargin">
          <img :src="video.video_url" :alt="video.name">
          </div><!-- .portfolio-single-image end -->

          <!-- Portfolio Single Content
          ============================================= -->
          <div class="col_one_third portfolio-single-content col_last nobottommargin">

            <!-- Portfolio Single - Description
            ============================================= -->
            <div class="fancy-title title-bottom-border">
              <h2>{{ video.name }}</h2><router-link v-bind:to="'/videos/' + video.id + '/edit'">Edit Video</router-link><br>
            </div>
            <p>{{ video.description }}</p>

            <!-- Portfolio Single - Description End -->

            <div class="line"></div>

            <!-- Portfolio Single - Category Information
            ============================================= -->
            <ul class="portfolio-meta bottommargin">
            <li><span><i class="icon-user"></i>Category:</span> {{video.category}}</li>
            </ul>
            <!-- Portfolio Single - Category Information End-->


          </div><!-- .portfolio-single-content end -->

          <div class="clear"></div>

          <div class="divider divider-center"><i class="icon-circle"></i></div>


        </div>

      </div>

    </section><!-- #content end -->

  </div>
</template>

<script>
var axios = require("axios");
export default {
  data: function() {
    return {
      video: {},
      pairing: {}
    };
  },
  created: function() {
    axios.get("/api/videos/" + this.$route.params.id).then(response => {
      console.log(response.data);
      this.video = response.data;
    });
  },
  methods: {
    favoritePairing: function(pairing) {
      var params = {
        pairing_id: pairing.id
      };
      axios.post("/api/favorites/", params).then(response => {
        console.log(response.data);
      });
    }
  }
};
</script>
