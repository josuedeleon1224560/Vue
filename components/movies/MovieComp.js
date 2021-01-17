let MovieComp = {
	template: 
	`
	<div> 
		<h2 v-text="title"></h2>
		<img :src="cover" alt="ImagenDePelicula">
			<p v-text="synopsis"></p>
			<button @click="$emit('update:like', !like )" v-text="like ? 'Favoritas' : 'Agregar a Favoritas'"></button>
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
	},  <!-- Segunda forma para recibir los props -->
		like: {
	type: Boolean,
	required: true,
	default() {
		return false
}
	}
},
			methods: {
				toogleLike() {
				<!-- this.like = !this.like -->
					let data = {
						id: this.id,
						like: !this.like
				}
				this.$emit('toogleLike', data)
			}
		}
}