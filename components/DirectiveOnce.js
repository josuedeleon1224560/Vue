let DirectiveOnce = {
	template: 
	`
	<div>
		<h2 v-text="title" v-once> </h2> <!-- No cambia el valor del title inicial -->
	</div>
	`,
	data(){
		return{
		title: 'Directive v-once',
	}
}
}