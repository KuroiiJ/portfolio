<template>
    <div class="about-code">
    <section class="section">
		
		<br />
			
		<div class="container">
			<div class="columns">
				<div class="column is-centered-tablet-portrait">
					
					<h2 class="title section-title">
						Code Should Be Beautiful
					</h2>
					<h3 class="subtitle is-4 is-muted">
						And by that I mean...
					</h3>
					<div class="divider"></div>
					
				</div>
			
				
				<div class="column is-8 mt-60"><br/><br/><br/>
					<article class="media icon-box">
					
						<figure class="media-left">
							<figure class="image is-128x128">
								<img src="../assets/HumRead.png">
							</figure>
						</figure>
						<div class="media-content mt-50">
							<div class="content">
								<h3 class="title is-4 has-text-weight-medium">
									Human Readable
								</h3>
								<p>
									I am determined to make my code understandable to other engineers. I advocate for simple things: A clear file structure, well named variables, and small components. I also don’t hesitate to put comments in my code to clarify or state what is happening when needed. 
								</p>
							</div>
						</div>
					</article>

					<article class="media icon-box">
						<figure class="media-left">
							<figure class="image is-128x128">
								<img src="../assets/DRY.png">
							</figure>
						</figure>
						<div class="media-content mt-50">
							<div class="content">
								<h3 class="title is-4 has-text-weight-medium">
									DRY (Don't Repeat Yourself)
								</h3>
								<p>
									I make small and reusable components. When a change needs to be made to a website or app, I consider it a failure if it needs to be updated in multiple places. If the same information is being pulled from the database more than once, it’s going into a (clearly named) method. 
								</p>
							</div>
						</div>
					</article>

					<article class="media icon-box">
						<figure class="media-left">
							<figure class="image is-128x128">
								<img src="../assets/Scalable.png">
							</figure>
						</figure>
						<div class="media-content mt-50">
							<div class="content">
								<h3 class="title is-4 has-text-weight-medium">
									Scalable
								</h3>
								<p>
									It’s great to have code that works, but 6 months down the road if that code needs to be refactored, it takes away from time that can be spent building. If there’s an issue that will come up in the future, deal with now. 
								</p>
							</div>
						</div>
					</article>


				</div>	
						
			</div>
		</div>
	</section>
    </div>
</template>

<script>
export default {
  name: 'AboutCode',
  props: {
    
  }
}
</script>