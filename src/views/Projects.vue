<template>
	<div>
		<section class="hero is-info is-bold">
			<div class="hero-body">
				<div class="container">
					<div class="columns is-vcentered is-centered">
					
				
				<div class="column is-narrow">
					<h1 class="title is-2">Projects</h1>
				</div>
				</div> 
			</div>
		</div>
		</section>
		<section class="section">
			<div class="container is-fluid">
				<div class="columns is-centered is-multiline">
					<div class="is-reverse">
						<div class="column is-one-third" v-for="project in projects" v-bind:key="project.slug">
							<post-card v-bind="project"></post-card>
						</div>		
					</div>		
				</div>
			</div>
		</section>
	</div>
</template>

<style type="text/css">

.is-reverse {
    flex-direction: row-reverse;
	flex-wrap: wrap;
	justify-content: flex-end;
    display: flex;
  }

</style>

<script>
    import ProjectsService from '@/services/ProjectsService'
	import PostCard from '@/components/PostCard'
	export default {
		name: "projects",
		components: {
			PostCard
		},
		data() {
			return{
				airtableResponse: []
			}
		},
		mounted: function () {
			let self = this
            
			async function getProjects() {
                
				try{
					const response = await ProjectsService.getProjects()
					
					self.airtableResponse = response.data.records
				}catch(err){
					console.log(err)
				}
			}
			getProjects()		  	
		},
		computed: {
			projects(){
				let self = this
				let projectList = []
				for (var i = 0; i < self.airtableResponse.length; i++) {
					if (self.airtableResponse[i].fields.Published){
						let project = {
							title: self.airtableResponse[i].fields.Title,
							date: self.airtableResponse[i].fields["Date Published"],
							snippet: self.airtableResponse[i].fields.Excerpt,
							image: self.airtableResponse[i].fields.Image[0].url,
							slug: self.airtableResponse[i].fields.slug,
							Github: self.airtableResponse[i].fields.Github,
							Deployed: self.airtableResponse[i].fields.Deployed,
							Tech: self.airtableResponse[i].fields.Tech
							
						}
						projectList.push(project)
					}
				}
				console.log("plist", projectList)
				return projectList
			}
		}
	};
</script>