let DirectiveOn= {
		template: `<header > 
		<h1 v-text="title"> </h1>
		<p v-text="message"> </p>
		<h2>Pelicula</h2>
		<p v-text="pelicula"></p>
		<button @click.stop="ComprarEntrada">Comprar</button>
		<input type="text" @keydown="decirHola"/>
		<!-- @keydown deshacer el method  -->
		 disponibles <span v-text="entradas"></span>
		 <div>
		 	<h1>Modificando vista y modelo</h1>
		 	<input type="text" :value="textInput" @keyup="updateDataTextInput">
		 	<!-- @keyup metodo de Vue para las teclas -->
		 </div>
	</header>`,
data(){
	return {
		title: 'Directiva v-on',
		message: 'Hola desde Directiva v-on',
		welcome_page: 'Bienvenido desde la data',
		pelicula: 'Dora la exploradora',
		entradas: 5,
		textInput: 'Valor por defecto del input text',
	}
},
	methods: {
	updateDataTextInput(event)
	{
		this.textInput=event.target.value
	},
		decirHola() {
		alert(this.welcome_page)
		},

		ComprarEntrada(){
		if(this.entradas > 0 ){
		this.entradas--
	return alert(`Entrada para ${this.pelicula} comprada`)
	}

	return alert('Ya no hay entradas')
		}
	}
}