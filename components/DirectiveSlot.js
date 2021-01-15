let DirectiveSlot = 
{
	template: 
	`<div>
		<h2 v-text="title"></h2>
		<buttonComp>
			<template #action> <!-- Llamar a v-slot  -->
				Dar
			</template>
			<template #action2>
				Click
			</template>
		</buttonComp>
	</div>
	`,
data(){
	return {
		title: 'Directive v-slot ',
}
	},
	components: {
		buttonComp,
	}
}