import '../scss/styles.scss'
import * as bootstrap from 'bootstrap'


const getApi = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    return data.results;
};

let htmlElement = document.querySelector("#root")


async function montaCard(url) {

    let urlFoto
    let overview
    let titulo
    let idFilme

    const resultado = await getApi(url)
    
    resultado.forEach(filme => {
        let foto 
        urlFoto = filme.poster_path
        idFilme = filme.id
        if (urlFoto == null){
            foto = "erro.jpeg"
        } else {
            foto = `https://image.tmdb.org/t/p/w200${urlFoto}`
        }
        
        overview = filme.overview
        titulo = filme.title    
        htmlElement.innerHTML += `  <div class="col">
                                        <div class="card">
                                            <div class="card-img-top">
                                                
                                                    <img src="${foto}" alt="Placeholder">
                                                
                                            </div>
                                            <div class="card-body">
                                                <div class="media">
                                                    
                                                       <strong> Titulo: <p class="title is-4">${titulo}</p> </strong>
                                                       <a href="https://www.themoviedb.org/movie/${idFilme}" class="btn btn-primary">Pagina do filme no TMDB</a>
                                                        
                                                    
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>`
    });
    
}


const botao = document.querySelector("#botao")
botao.addEventListener('click', function() {
    const input = document.querySelector("#pesquisar")
    const text = input.value

    const url = `https://api.themoviedb.org/3/search/movie?api_key=946404caaa5dadc624776d0a03d47402&language=pt-BR&query=${text}`

    htmlElement.innerHTML = ''

    window.location.href = `http://localhost:8080/index.html`
    
    montaCard(url)

})