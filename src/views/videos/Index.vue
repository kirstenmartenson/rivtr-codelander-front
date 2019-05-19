<template>
  <div class="videos-index">

    <!-- Content
    ============================================= -->
    <section id="content">

      <div class="content-wrap">

        <div class="container clearfix">

          <!-- Portfolio Filter
          ============================================= -->
          <ul id="portfolio-filter" class="portfolio-filter clearfix" data-container="#portfolio">

            <li class="activeFilter"><a href="#" data-filter="*">Show All</a></li>
            <li><a href="#" @click="setCategory('Inside the Home')">Inside the Home</a></li>
            <li><a href="#" @click="setCategory('Outside the Home')">Outside the Home</a></li>
<!--             <li><a href="#" @click="setCategory('Sparkling')">Sparkling</a></li>
            <li><a href="#" @click="setCategory('Fortified')">Fortified</a></li>
 -->
          </ul><!-- #portfolio-filter end -->
          <input v-model="categoryFilter" list="categories" placeholder="Search Videos by Category" type="text">
          <div class="clear"></div>

          <!-- Portfolio Items
          ============================================= -->
          <div id="portfolio" class="portfolio grid-container portfolio-2 portfolio-masonry clearfix">

            <article v-for="video in orderBy(filterBy(videos, categoryFilter))" class="portfolio-item pf-media pf-icons">
              <router-link v-bind:to="'/videos/' + video.id">
                <div class="portfolio-image">
                  <a href="portfolio-single.html">
                    <img :src="video.video_url" :alt="video.name">
                  </a>
                  <!-- hover effect with buttons -->
                  <div class="portfolio-overlay">
                    <a href="images/portfolio/full/1.jpg" class="left-icon" data-lightbox="image"><i class="icon-line-plus"></i></a>
                    <a href="portfolio-single.html" class="right-icon"><i class="icon-line-ellipsis"></i></a>
                  </div>
                  <!-- hover effect with buttons end-->
                </div>
                <div class="portfolio-desc">
                  <h3><a href="portfolio-single.html">{{ video.name }}</a></h3>
                  <span>{{ video.description }}</span>
                </div>
              </router-link>
            </article>

          </div><!-- #portfolio end -->

        </div>

      </div>

    </section><!-- #content end -->
    <datalist id="categories">
      <option>Inside the Home</option>
      <option>Outside the Home</option>
    </datalist>
  </div>
</template>

<script>
/* global $, SEMICOLON */
import axios from "axios";
import Vue2Filters from "vue2-filters";
export default {
  mixins: [Vue2Filters.mixin],
  data: function() {
    return {
      videos: [],
      video: {},
      categoryFilter: "",
      categories: []
    };
  },
  created: function() {
    axios.get("/api/videos").then(response => {
      console.log(response.data);
      this.videos = response.data;
      // initiates grid on class of .grid-container
      SEMICOLON.portfolio.gridInit($(".grid-container"));
    });
  },
  methods: {
    setCategory: function(category) {
      this.categoryFilter = category;
    }
  }
};
</script>
