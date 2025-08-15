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
        text: "Este é o terceiro post",
        category: "Eventos",
        image: "https://placedog.net/150?random=4",
        date: "12/10/2023 12:00:00"
    }
];

window.onload = function(){
   mostrarPosts();
   document.querySelector("#postForm").addEventListener("submit",addPost)

}

//CREATE
function addPost (infosDoEvento){
    infosDoEvento.preventDefault();
    const textoPost = document.querySelector("#postText").value;
    const categoriaPost = document.querySelector("#postCategory").value;
    const imagemPost = document.querySelector("#postImage").value;
    const dataPost = new Date().toLocaleString();

    const novoPost = {
        text: textoPost,
        category: categoriaPost,
        image: imagemPost,
        date: dataPost
    }
    posts.unshift(novoPost);

    mostrarPosts()

}

//READ
function mostrarPosts(){
   const listaPosts=document.querySelector("#postList")
   listaPosts.innerHTML = ""
// passa em cada item do array criando um tweet
   posts.forEach(pegaItem => {
     const cardPost = document.createElement("div")
     cardPost.classList.add("card")

     cardPost.innerHTML = `
      <h2>${pegaItem.text}</h2>
      <img src ="${pegaItem.image}"/>
      <p>${pegaItem.category}</p>
      <p>${pegaItem.date}</p>
       `
       listaPosts.append(cardPost)


    })
   
}

//UPDATE
function editarPosts(){}
//DELETE
function deletarPosts (){}