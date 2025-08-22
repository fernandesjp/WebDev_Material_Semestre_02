// Dados de exemplo dos posts
let posts = [
    {
        text: "Este é o primeiro post",
        category: "Notícias",
        image: "https://placedog.net/150?random=1",
        date: "12/10/2021 12:00:00"
    },
    {
        text: "Este é o segundo post",
        category: "Dicas",
        image: "https://placedog.net/150?random=2",
        date: "12/10/2022 12:00:00"
    },
    {
        text: "Este é o terceiro post teste",
        category: "Eventos",
        image: "https://placedog.net/150?random=3",
        date: "12/10/2023 12:00:00"
    }
];
 
window.onload = function(){
    carregarPosts();
    mostrarPost();
    document.querySelector("#postForm").addEventListener("submit", addPost)
 
    document.querySelector('#postList').addEventListener('click', handleClick)

    //localStorage.setItem("nome","Fulano")
    //console.log(localStorage.getItem("nome"));
    //localStorage.removeItem("nome");
    //localStorage.clear();
}
 
function handleClick(infosDoEvento){
 
    const action = infosDoEvento.target.dataset.action;
    const index = infosDoEvento.target.dataset.index;

    if(action === "Editar"){
        editarPost(index)
    }
    else if(action === "Apagar"){
        deletarPost(index)
    }
}
 
//CREATE
function addPost(infosDoEvento){
    infosDoEvento.preventDefault()
 
    //cria variaveis para todos os posts
    const textoPost = document.querySelector("#postText").value
    const categoriaPost = document.querySelector("#postCategory").value
    const imagemPost = document.querySelector("#postImage").value
    const dataPost = new Date().toLocaleString()
   
    // pega o array de cima e junta com o novoPost
    const novoPost = {
        text: textoPost,
        category: categoriaPost,
        image: imagemPost,
        date: dataPost,
    }
 
    //deixa o post do mais novo para o mais antigo por conta do unshift
    posts.unshift(novoPost)
    salvarPosts();
 
    document.querySelector('#postForm').reset()
 
 
    //chama a função mostrarPost para mostrar o novo post
    mostrarPost()
}
//READ
function mostrarPost(){
    //pega a id postList
    const listaPosts = document.querySelector("#postList")
    listaPosts.innerHTML = ""
 
    //passa nos items do array
    posts.forEach((pegaItem, index) => {
        const cardPost = document.createElement("div")
        cardPost.classList.add("card")
 
        cardPost.innerHTML = `
        <h2>${pegaItem.text}</h2>
        <img src ="${pegaItem.image}"/>
        <p>${pegaItem.category}</p>
        <p>${pegaItem.date}</p>
        <button data-action="Editar" data-index="${index}"><i class="fa-solid fa pen-to-square"></i>
        Editar</button>
        <button data-action="Apagar" data-index="${index}"><i class="fa-solid fa pen-to-square"></i>
        Apagar</button>
        `
 
        //adiciona o post
        listaPosts.append(cardPost)
 
    })
}
//UPDATE
function editarPost(index){
  const novoTexto = prompt('Edite o conteúdo do post',posts[index].text);
  if(confirmar){
  posts[index].text = novoTexto;
}
  mostrarPost();
}
//DELETE
function deletarPost(index){
  const confirmar = confirm("Você deseja realmente excluir esse post?");
  if(confirmar){
  posts.splice(index,1);
  salvarPosts();
}
  mostrarPost();
}

function salvarPosts(){
    localStorage.setItem("posts", JSON.stringify(posts));
}

function carregarPosts(){
    const postsGuardados = localStorage.getItem("posts");
    if(postsGuardados){
        posts = JSON.parse(postsGuardados)
    }
}
        