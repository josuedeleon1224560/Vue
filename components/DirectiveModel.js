let DirectiveModel= {
			template:
	`
	<div>
	<h1 v-text="title"> </h1>
	<p  v-html="message"></p>
	<input type="text" v-model="inputText">
	<h2>Tipo Checkbox</h2>
	<label>
		<input type="checkbox" name="checkbox" v-model="checked">
		Activado
	</label>

	<h2>Peliculas</h2>
	<label v-for="(movie, key) in movies" :key="key">
		<input type="checkbox" name="checkbox2" :value="movie" v-model="favoriteMovies">
		{{movie}}
	</label>

	<div v-show="favoriteMovies.length > 0">
		<h2>Peliculas Favoritas</h2>
		<ul>
			<li v-for="(index, key) in favoriteMovies" :key="key" v-text="index"></li>
		</ul>
	</div>

	</div>
	`,
data(){
	return{
		title: 'Directivas v-model',
		message: '<b>Hola desde directive v-model<b/>',
		inputText: "Data del input",
		checked: false,
		favoriteMovies: [],
		movies: ['Buscando a Nemo', 'Spiderman', 'Toy Story'],
	}
}
}