    Vue.component('props-comp', {
    template: 
    `
    <div> 
      <h1>Peliculas Props</h1>
      <MovieComp v-for="(movie, key) in movies" 
      :id="movie.id" 
      :title="movie.title"
       :synopsis="movie.synopsis" 
       :cover="movie.cover" 
       :key="key"
       :like.sync="movie.like"
       />
  </div>
  `,
  data(){
  return{
  movies:
  [
  {
    id: 1,
    title: 'Titanic',
    synopsis: 'Durante las labores de recuperación de los restos del famoso trasatlántico Titanic, una anciana norteamericana se pone en contacto con la expedición para acudir…',
    cover: 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/zraTDtulFw2wrpyuYf646k95MNq.jpg',
    like: false
},
{
    id: 2,
    title: 'El Rey León',
    synopsis: 'Un remake del clásico animado de Disney de 1994 El rey león que estará dirigido por Jon Favreu. Simba (Donald Glover) es el hijo del rey de los leones, Mufasa…',
    cover: 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/3A8ca8WOBacCRujSKJ2tCVKsieQ.jpg',
    like: false
},
{
    id: 3,
    title: 'El Rey León',
    cover: 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/3A8ca8WOBacCRujSKJ2tCVKsieQ.jpg',
    like: false
},
{
    id: 4,
    title: 'Toy Story',
    synopsis: 'Woody siempre ha tenido claro cuál es su labor en el mundo: cuidar a su dueño, ya sea Andy o Bonnie. Sin embargo, ahora descubrirá lo grande que puede ser el mundo para un juguete cuando el pequeño Forky se convierta en su nuevo compañero de habitación y se embarquen en una aventura que no olvidarán jamás durante un viaje por carretera.',
    cover: 'https://static.rogerebert.com/uploads/movie/movie_poster/toy-story-1995/large_agy8DheVu5zpQFbXfAdvYivF2FU.jpg',
    like: false
            } 
           ]
      }
    },
 components: {
    MovieComp
    },
            methods: {
                onToggleLike(data){
                    let movieLike= this.movies.find(movie => movie.id == data.id)
                movieLike.like = data.like
            }
        }
})