class CRUD {
    constructor(url) {
        this.url = url;
    }

    get(endpoint) {
        return fetch(this.url + endpoint).then(resposta => resposta.json());
    }

    post(endpoint, body) {
        return this._send("post", endpoint, body);
    }

    _send(method, endpoint, body) {
        return fetch(this.url + endpoint, {
            method,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        }).then(resposta => resposta.json());
    }
}

const api = new CRUD("https://jsonplaceholder.typicode.com");
const formulario = document.querySelector("form");
const inputTitulo = document.querySelector("#titulo");
const inputMensagem = document.querySelector("#mensagemPut");
const listaPostagens = document.querySelector("#postagens");

const renderizarPost = (post, posicao = "afterbegin") => {
    const novoPostHTML = `
        <li class="card-post">
            <h3>${post.title}</h3>
            <p>${post.body}</p>
        </li>
    `;
    listaPostagens.insertAdjacentHTML(posicao, novoPostHTML);
};

const carregarPostsIniciais = () => {
    api.get("/posts")
        .then(posts => {
            posts.slice(0, 5).forEach(post => renderizarPost(post, "beforeend"));
        })
        .catch(error => console.error("Erro ao carregar:", error));
};

formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = {
        title: inputTitulo.value,
        body: inputMensagem.value,
        userId: 1
    };

    api.post("/posts", data)
        .then(response => {
            renderizarPost(response, "afterbegin");
            formulario.reset();
        })
        .catch(error => console.error("Erro ao postar:", error));
});

carregarPostsIniciais();