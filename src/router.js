
import Vue from "vue";
import Router from "vue-router";

import Home from "./views/Home.vue";
import About from "./views/About.vue";

import Signup from "./views/Signup.vue";
import Login from "./views/Login.vue";
import Logout from "./views/Logout.vue";


import UsersShow from "./views/users/Show.vue";

import VidoesIndex from './views/videos/Index.vue';
import VideosShow from './views/videos/Show.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: 
  [
    { path: "/", name: "home", component: Home },
    { path: "/about", name: "about", component: About },
    
    // #Users
    { path: "/users/me", name: "users-show", component: UsersShow },

    // #Signup/Login/Logout
    { path: "/signup", name: "signup", component: Signup },
    { path: "/login", name: "login", component: Login },
    { path: "/logout", name: "logout", component: Logout },

    // #Videos
    { path: '/videos', name: 'videos-index', component: VideosIndex},
    { path: '/videos/:id', name: 'videos-show', component: VideosShow}
  ]
});