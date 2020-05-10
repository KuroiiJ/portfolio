<template>
  <div>
    <div class="hero is-cover is-relative is-fullheight-with-navbar is-bold is-info">
        <div class="hero-body">
            <div class="container">
                <div class="columns">
                    <div class="column is-one-third">
                        <figure class="image is-300x300">
                          <img class="is-rounded" src="../assets/c-and-h.jpg">
                        </figure>
                    </div>
                    <div class="column">
                        <h1 class="title is-2"> <span class="multicolortext"><br/><br/>I'm Chloé Jandsten</span></h1>
                        <br />
                        <h3 class="subtitle is-4">I am a NYC-based fullstack software engineer with a background in developer marketing, account management, and start-ups.</h3>
                    </div>
                    </div>
                
            </div>
        </div>
    </div>
  </div>
</template>

<style>
  .multicolortext {
    background-image: linear-gradient(to left, violet, indigo, blue, green, yellow, orange, red);
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
    color: transparent;
  }
</style>

<script>

export default {
  name: "home",
};
</script>