Vue.component('computed-properties-get-set',{
	template: 
	`
	<div>
		<h1>Computed Properties con Getter y Setter </h1>
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
	fullName: {
		get (){
			return `${this.user.name} ${this.user.lasName}`
		},
		set (NewValue){
			let name = NewValue.split(' ')	
			this.user.name  = name[0]
			this.user.lasName = name[1]
	}
		}, 
	UserAge(){
		let date=  new Date()
		let currentYear = date.getFullYear()
		return currentYear - Number(this.user.year)
}
	}
})