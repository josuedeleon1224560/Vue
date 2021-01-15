let MovieComp = {
	template: 
	`
	<div> 
		<h2 v-text="title"></h2>
		<img :src="cover" alt="ImagenDePelicula">
			<p v-text="synopsis"></p>
			<hr>

<!-- 	props: [
	'id',
	'title',
	'synopsis',
	'cover'
	],  Primera forma para recibir props -->
	</div>
	`,
		props: {
		id: {
	type: Number,
	required: true,
	},
		title: {
	type: String,
	required: true,
	},
		synopsis:{
	type: String,
	default: 'No posee Synopsis',
	},
		cover: {
	type: String,
	required: true,
	}  <!-- Segunda forma para recibir los props -->

}
}