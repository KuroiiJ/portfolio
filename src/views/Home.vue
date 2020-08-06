<template>
  <div>
    <div class="hero is-cover is-relative is-fullheight-with-navbar bg-home is-bold">
        <div class="hero-body">
            <div class="container">
                <div class="columns is-vcentered">
                    <div class="column is-one-third">
                        <figure class="image is-256x256">
                          <img class="is-rounded" src="../assets/c-and-h.jpg">
                        </figure>
                    </div>
                    <div class="column" >
                    
                        <h1 class="title is-2"> <span class="multicolortext">I'm Chloé Jandsten</span></h1>
                        <h2 class="subtitle is-4 is-muted"><span class="white-text">(my dog is Hondo <font-awesome-icon :icon="['fas', 'paw']" />)</span></h2>
                        <br />
                        <h3 class="subtitle is-3"><span class="white-text">I am a NYC-based fullstack software engineer with a background in developer marketing, account management, and start-ups.</span></h3>
                        <br />
                        <h3 class="subtitle is-4"><span class="white-text">Some tech I'm currently using:</span></h3>
                    
                        <div class="tags are-medium">
                          <span class="tag is-warning is-light">Javascript</span>
                          <span class="tag is-link is-light">Node.js</span>
                          <span class="tag is-info is-light">React</span>
                          <span class="tag is-success is-light">Redux</span>
                          <span class="tag is-link is-light">PWA's</span>
                          <span class="tag is-warning is-light">CSS/HTML</span>
                          <span class="tag is-info is-light">VueJS</span>
                          <span class="tag is-warning is-light">PostgreSQL</span>
                          <span class="tag is-link is-light">MongoDB</span>
                          <span class="tag is-primary is-light">Airtable</span>
                          <span class="tag is-info is-light">PUG</span>
                          <span class="tag is-warning is-light">Express</span>
                          <span class="tag is-success is-light">Electron</span>
                          <span class="tag is-primary is-light">Sockets</span>
                          
                        </div>
                    </div>
                </div>
               
            </div>
            
        </div>
    </div>
  </div>
</template>

<style>
  .multicolortext {
    background-image: linear-gradient(to left, red, orange, orange, red, orange, orange, red);
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
    color: transparent;
  }
  .bg-home {
    background: linear-gradient(to left, #4b0082,#4b0082,#4b0082,#4b0082, #c83200);
    
  }
  .white-text {
    color: #f5deb3;
  }

  
</style>

<script>

export default {
  name: "home",
};
</script>