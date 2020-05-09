<template>
  <div>
    <div class="hero is-cover is-relative is-fullheight-with-navbar is-bold is-info">
        <div class="hero-body">
            <div class="container">
                <div class="columns">
                    <div class="column is-one-third">
                        <figure class="image is-300x300">
                          <img class="is-rounded" src="../assets/chloe-trans.png">
                        </figure>
                    </div>
                    <div class="column">
                        <h1 class="title is-2"> <span class="multicolortext"><br/><br/>I'm Chloé Jandsten</span></h1>
                        <h2 class="subtitle is-3">Enthusiastic. Passionate. Experienced.</h2>
                        <h3 class="subtitle is-4">I'm an excitable developer based in NYC.</h3>
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