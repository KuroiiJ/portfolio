import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Contact from "./views/Contact.vue";
import Projects from "./views/Projects.vue"
import Project from "./views/Project.vue"
import Cert from "./views/Cert.vue"

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/projects",
      name: "projects",
      component: Projects
    },
    {
      path: "/project/:slug",
      name: "project",
      component: Project
     },
     {
      path: "/.well-known/acme-challenge/WJRRhpMMH9wnlgvYexw2v_puU6ymMfOvR2fmdSdrwyM",
      name: "cert",
      component: Cert
     }
  ]
});
