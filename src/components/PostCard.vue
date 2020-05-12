<template>
	<div class="post-card">
		
		<div class="card">
			<div class="card-image">
				<figure class="image is-square">
					<img :src="image" alt="Placeholder image">
				</figure>
			</div>
			<div class="card-content">
				<div class="media">
					<div class="media-content">
						<p class="title is-4">{{title}}</p>
					</div>
				</div>
				<div class="content">
					<p>{{snippet}}</p>
					<p class="buttons is-centered">
					
						<button class="button">
							<span><a :href="Deployed">View Project</a></span></button>
						<button class="button">
							<span><a :href="Github"><font-awesome-icon :icon="['fab', 'github']" /> GitHub </a></span>
						</button>
					</p>
					<div class="tags are-small is-centered">
						<div v-for="tech in Tech" v-bind:key="tech">
							<span class="tag is-primary is-light">{{tech}}</span>
						</div>
					</div>
				</div>
				
			</div>
		</div>
		
	</div>
</template>

<script>
	export default {
		name: "PostCard",
		props: {
			title: String,
			date: String,
			snippet: String,
			image: String,
			slug: String,
			Tech: Array, 
			Github: String,
			Deployed: String
		}
	};
</script>


