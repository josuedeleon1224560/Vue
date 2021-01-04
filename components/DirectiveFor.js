let DirectiveFor= {
			template:
	`
	<div>
	<h1 v-text="title"> </h1>
	<p v-html="message"></p>
	<h3>Lista de un array</h3>
	<ul>
		<li v-for="(item, index) in list" :key="index" v-text="item"></li>
	</ul>

	<h3>Lista de un objeto</h3>
	<ul>
		<li v-for="(item, key, index) in objetc_list" :key="index" >
			{{key}}:{{item}}
		</li>
	</ul>


	<h3>Lista de Array con un objeto</h3>
	<ul>
		<li v-for="(item, index) in other_list" :key="index" >
			Nombre: {{item.name}} <br>
			Apellido: {{item.last_name}} <br>
			Nick: {{item.nick}} <br>
		</li>
	</ul>
	</div>
	`,
data(){
	return{
		title: 'Directivas v-For',
		message: '<b>Hola desde directive v-for<b/>',
		list: ['Rojo', 'Azul', 'Amarillo', 'Purpura'],
		objetc_list: {
			name: 'Jesus',
			last_name: 'Lopez',
			nick: 'Lopvi'
	},
		other_list:[
		{
			name: 'Jesus',
			last_name: 'Lopez',
			nick: 'Lopvi'
		},
		{
			name: 'Jorge',
			last_name: 'Martinez',
			nick: 'JoMark'
		},
		{
			name: 'Ismael',
			last_name: 'Carranza',
			nick: 'Ismaza'
		}
		]
	}
}

}