<template>
	<div>
		<section class="hero is-info is-bold">
			<div class="hero-body">
				<div class="container">
					<div class="columns is-vcentered is-centered">
						<div class="column is-narrow">
							<h1 class="title is-2">Contact</h1>
						</div>
				
				</div> 
			</div>
		</div>
		</section>


    

		<section class="section has-background-light">
			<container>
				<h2 class="title is-3 has-text-weight-medium has-text-centered">
						Get in touch 
				</h2>

				<h3 class="is-size-5 has-text-centered">
					Disagree with my Star Wars rankings and want to yell about it? I'm down!
					<br/> 
					Want to connect and talk tech or work together on a project? Also great!
					<br/><br/>
					Either way, here's where you can find me:
					<br/><br/>
				</h3>

				<div class="container">
					<div class="columns is-centered">
						<div class="column is-three-fifths">
							<div>		
								<p class="buttons is-centered">
									<button class="button is-light">
									<span><a href="https://github.com/KuroiiJ"><font-awesome-icon :icon="['fab', 'github']" />  GitHub </a></span>
									</button>
									<button class="button is-light">
									<span><a href="https://twitter.com/captainkuroii"> <font-awesome-icon :icon="['fab', 'twitter']" /> Twitter</a></span>
									</button>
									<button class="button is-light">
									<span><a href="mailto:chloe.jandsten@gmail.com"> <font-awesome-icon :icon="['fas', 'paper-plane']" /> Email Me</a></span>
									</button>
									<button class="button is-light">
									<span><a href="https://www.linkedin.com/in/chloejandsten/"> <font-awesome-icon :icon="['fab', 'linkedin']" /> LinkedIn</a></span>
									</button>
									<button class="button is-light">
									<span><a href="https://www.instagram.com/hondo_the_doggo/"> <font-awesome-icon :icon="['fab', 'instagram']" /> Dog Instagram</a></span>
									</button>
								</p>
							</div>
						</div>
					</div>
				</div>
				<br /><br /><br /><br />
				<div class="columns is-centered">
                    <div class="column is-one-third">
						<figure class="image is-256x256">
							<img class="is-5-by-4" src="../assets/meta-image.png">
						</figure>
					</div>
                 </div>
			</container>
		</section>			

	</div>
</template>

<script>
export default {
  name: "contact",
};
</script>