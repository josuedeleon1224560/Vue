Vue.component('vue-directives', {
	template:
	`
	<div>
	<h1 v-text="title"> </h1>
	<p v-text="text"></p>
	<a :href="link.href" :title="link.title" v-text="link.text"> </a>
	<DirectiveHtml/>
	<DirectiveShow/>
	<DirectiveIf/>
	<DirectiveFor/>
	<DirectiveOn/>
	<DirectiveModel/>
	</div>
	`,
data(){
	return{
		title: 'Directivas de vuejs',
		text: 'Texto de prueba v-text',
		link: {
			text: 'Pagina de Vue',
			href: 'https://vuejs.org/',
			title: 'Documentacion de Vue'
		}
	}
},
components: {
	DirectiveHtml,
	DirectiveShow,
	DirectiveIf,
	DirectiveFor,
	DirectiveOn,
	DirectiveModel
}
})