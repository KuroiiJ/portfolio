<template>
  <div>
    <section class="hero is-info is-bold">
		<div class="hero-body">
			<div class="container">
				<div class="columns is-vcentered is-centered">
				
				<div class="column is-narrow">
				<h1 class="title is-2">About Me</h1>
				</div>
				</div> 
			</div>
		</div>
	</section>

	<about-story v-bind="about"> </about-story>
	
	<about-code v-bind="about"> </about-code>
	
	<about-personal v-bind="about"> </about-personal>
	
	<about-fun v-bind="about"></about-fun>


  </div>
</template>

<style>
</style>

<script>
	import AboutFun from '@/components/AboutFun'
	import AboutPersonal from '@/components/AboutPersonal'
	import AboutStory from '@/components/AboutStory'
	import AboutCode from '@/components/AboutCode'

	export default {
	name: "about",
	components: {
			AboutFun,
			AboutPersonal,
			AboutStory, 
			AboutCode
		},
	};

</script>