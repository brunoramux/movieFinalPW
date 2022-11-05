import '../scss/styles.scss'
import * as bootstrap from 'bootstrap'

const getApi = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    return data.results;
};



let htmlElement = document.querySelector("#root")


const url = "https://api.themoviedb.org/3/movie/now_playing?api_key=946404caaa5dadc624776d0a03d47402&language=pt-BR&page=1"
const resultado = await getApi(url)
console.log(resultado)
resultado.forEach(async (filme) => {
    let urlFoto = filme.poster_path
    let foto = `https://image.tmdb.org/t/p/w200${urlFoto}`
    let titulo = filme.title
    let data = filme.release_date
    let idFilme = filme.id
    let descricao = filme.overview
    let pontuacao = filme.vote_average
    const filmeKey = await procuraFilme(idFilme)  
    htmlElement.innerHTML += `  <div class="card" id="cartoes">
                                
                                    <div class="card-image">
                                        
                                            <img src="${foto}" alt="Placeholder image">
                                        
                                    </div>
                                    <div class="media-content" id="cardBottom">Nota: ${pontuacao}
                                        <button type="button" class="btn btn-light" data-bs-toggle="modal" data-bs-target="#exampleModal${idFilme}">Descricao</button>
                                    </div>
                                </div>

                                
                                
                                <div class="modal fade" id="exampleModal${idFilme}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="exampleModalLabel">${titulo}</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <p>${descricao}</p>
                                        <a href="https://www.youtube.com/watch?v=${filmeKey}">Assista ao trailer</a>
                                        
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                                        
                                    </div>
                                    </div>

                                </div>
                                </div>`
})


async function procuraFilme(id){
    let chave
    const urlVideos = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=946404caaa5dadc624776d0a03d47402&language=en-US`
    
        const resVideos =  await getApi(urlVideos)
        if (resVideos != null){
        resVideos.forEach(videos => {
            if(videos.name == 'Official Trailer'){
                chave = videos.key
            }
        })
        // const keyVideo = restVideos.key
        // console.log(chave)
        return chave
        }
    
}

const urlTrending = "https://api.themoviedb.org/3/trending/all/day?api_key=946404caaa5dadc624776d0a03d47402&language=pt-BR"
const resultadoTrending = await getApi(urlTrending)
let htmlElement2 = document.querySelector("#root2")

console.log(resultadoTrending)
resultadoTrending.forEach(async (filme) => {
    let urlFotoTrending = filme.poster_path
    let fotoTrending = `https://image.tmdb.org/t/p/w200${urlFotoTrending}`
    let tituloTrending = filme.original_title
    let dataTrending = filme.release_date
    let idFilmeTrending = filme.id
    let descricaoTrending = filme.overview
    let pontuacaoTrending = filme.vote_average
    const filmeKeyTrending = await procuraFilme(idFilmeTrending)  
    htmlElement2.innerHTML += `  <div class="card" id="cartoes">
                                
                                    <div class="card-image">
                                        
                                            <img src="${fotoTrending}" alt="Placeholder image">
                                        
                                    </div>
                                    <div class="media-content" id="cardBottom">Nota: ${pontuacaoTrending}
                                        <button type="button" class="btn btn-light" data-bs-toggle="modal" data-bs-target="#exampleModal${idFilmeTrending   }">Descricao</button>
                                    </div>
                                </div>

                                
                                
                                <div class="modal fade" id="exampleModal${idFilmeTrending}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="exampleModalLabel">${tituloTrending}</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <p>${descricaoTrending}</p>
                                        <a href="https://www.youtube.com/watch?v=${filmeKeyTrending}">Assista ao trailer</a>
                                        
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                                        
                                    </div>
                                    </div>

                                </div>
                                </div>`
})

const urlUpcoming = "https://api.themoviedb.org/3/movie/upcoming?api_key=946404caaa5dadc624776d0a03d47402&language=pt-BR&page=1"
const resultadoUpcoming = await getApi(urlUpcoming)
let htmlElement3 = document.querySelector("#root3")

console.log(resultadoUpcoming)
resultadoUpcoming.forEach(async (filme) => {
    let urlFotoUpcoming = filme.poster_path
    let fotoUpcoming = `https://image.tmdb.org/t/p/w200${urlFotoUpcoming}`
    let tituloUpcoming = filme.original_title
    let dataUpcoming = filme.release_date
    let idFilmeUpcoming = filme.id
    let descricaoUpcoming = filme.overview
    let pontuacaoUpcoming = filme.vote_average
    const filmeKeyUpcoming = await procuraFilme(idFilmeUpcoming)  
    htmlElement3.innerHTML += `  <div class="card" id="cartoes">
                                
                                    <div class="card-image">
                                        
                                            <img src="${fotoUpcoming}" alt="Placeholder image">
                                        
                                    </div>
                                    <div class="media-content" id="cardBottom">Nota: ${pontuacaoUpcoming}
                                        <button type="button" class="btn btn-light" data-bs-toggle="modal" data-bs-target="#exampleModal${idFilmeUpcoming}">Descricao</button>
                                    </div>
                                </div>

                                
                                
                                <div class="modal fade" id="exampleModal${idFilmeUpcoming}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="exampleModalLabel">${tituloUpcoming}</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <p>${descricaoUpcoming}</p>
                                        <a href="https://www.youtube.com/watch?v=${filmeKeyUpcoming}">Assista ao trailer</a>
                                        
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                                        
                                    </div>
                                    </div>

                                </div>
                                </div>`
})

