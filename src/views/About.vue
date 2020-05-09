<template>
  <div>
    <section class="hero is-medium is-info is-bold">
			<div class="hero-body">
				<div class="container">
					<h1 class="title is-2">
						Highlights About... Me!
					</h1>
				</div>
			</div>
		</section>
		<section class="section">
			<div class="container is-fluid">
				<div class="columns is-multiline">
						<div class="column is-one-third" v-for="project in projects" v-bind:key="project.slug">
							<post-card v-bind="project"></post-card>
						</div>				
				</div>
			</div>
		</section>
        <section>
            <content class="is-large">
                <h1>Hi</h1>
            </content>
        </section>

  </div>
</template>

<script>

export default {
  name: "about",
};

</script>