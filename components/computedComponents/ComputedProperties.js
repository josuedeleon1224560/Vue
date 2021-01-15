Vue.component('computed-properties',{
	template: 
	`
	<div>
		<h1>Computed Properties</h1>
		<p> Hola soy {{fullName}} </p>
		<p>Y tengo {{UserAge}} años</p>
	</div>
	`,
	data(){
	return{
		user: {
			name: 'Josue',
			lasName: 'De Leon',
			year: 2001,
		}
}
	},
	computed:{
	fullName(){
			return `${this.user.name} ${this.user.lasName}`
		}, 
	UserAge(){
		let date=  new Date()
		let currentYear = date.getFullYear()
		return currentYear - Number(this.user.year)
}
	}
})