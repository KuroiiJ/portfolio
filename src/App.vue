<template>
  <div id="app">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <router-link class="navbar-item" to="/">
          <img src="./assets/vertical-logo.png" height="100">
        </router-link>

        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" :class="{ 'is-active': showNav }" @click="showNav = !showNav">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu" :class="{ 'is-active': showNav }">
        <div class="navbar-start">

        </div>

        <div class="navbar-end">
          <router-link to="/" class="navbar-item">
            Home
          </router-link>
          <router-link to="/about" class="navbar-item">
           About
          </router-link>
          <router-link to="/projects" class="navbar-item">
           Projects
          </router-link>
          <router-link to="/contact" class="navbar-item">
           Contact
          </router-link>
       </div>
     </div>
   </nav>

   <main>
      <transition
        name="fade"
        mode="out-in"
      >

        <router-view />

      </transition>
    </main>
   

   <footer class="footer">
    <div class="content has-text-centered">
      <p>
        Built by Chloe Jandsten with Vue.js, Bulma, and Airtable.
      </p>
    </div>
  </footer>
</div>
</template>



<style>
  .fade-enter-active,
  .fade-leave-active {
    transition-duration: 0.3s;
    transition-property: opacity;
    transition-timing-function: ease;
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0
  }
</style>



<script>
  export default {
    name: "App",
    data() {
      return{
        showNav: false
      }
    },
  };
</script>

<style type="text/css">
#app {
  min-height: 100vh;
  overflow: hidden;
  display: block;
  position: relative;
  padding-bottom: 100px; /* height of your footer */
}
footer {
 position: absolute;
 bottom: 0;
 width: 100%;
}


</style>

<style lang="sass">
$info: #4b0082;
$burnt: #8a1400;
$footer-padding: 2.5rem 1.5rem 2.5rem;
$box-background-color: #FEF2E9;
$warning: #E0115F;
$link: #1520a6;


@import "~bulma/bulma.sass"
</style>
