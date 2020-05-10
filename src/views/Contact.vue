<template>
	<div>
		<section class="hero is-medium is-info is-bold">
			<div class="hero-body">
				<div class="container">
					<h1 class="title is-2">
						Get In Touch
					</h1>
				</div>
			</div>
		</section>


    

		<section class="section">
			<div class="container">
				<div class="columns is-centered">
					<div class="column is-two-thirds">
						<div class="box">		
              <p class="buttons">
                <button class="button">

                  <span><a href="https://github.com/KuroiiJ"><font-awesome-icon :icon="['fab', 'github']" />  GitHub </a></span>
                </button>
                <button class="button">
                  <span><a href="https://twitter.com/captainkuroii"> <font-awesome-icon :icon="['fab', 'twitter']" /> Twitter</a></span>
                </button>
                <button class="button">
                  <span><a href="mailto:chloe.jandsten@gmail.com"> <font-awesome-icon :icon="['fas', 'paper-plane']" /> Email Me</a></span>
                </button>
                <button class="button">
                  <span><a href="https://www.linkedin.com/in/chloejandsten/"> <font-awesome-icon :icon="['fab', 'linkedin']" /> LinkedIn</a></span>
                </button>
                <button class="button">
                  <span><a href="https://www.instagram.com/hondo_the_doggo/"> <font-awesome-icon :icon="['fab', 'instagram']" /> Dog Instagram</a></span>
                </button>
              </p>
            </div>
					</div>
				</div>
			</div>
		</section>			


	</div>
</template>

<script>
export default {
  name: "contact",
};
</script>