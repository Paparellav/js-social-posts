// **Milestone 1** - Creiamo il nostro array di oggetti che rappresentano ciascun post (come da esempio).
// Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
const posts = [
    {
        "id": 1,
        "content": "“Non è tanto chi sei, quanto quello che fai che ti qualifica.”",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Vitantonio Paparella",
            "image": "img/paparella.jpg"
        },
        "likes": 1380,
        "created": "1 Years ago"
    },
    {
        "id": 2,
        "content": "Se l’Arcivescovo di Costantinopoli <br> si disarcivescoviscostantinopolizzasse,<br> vi disarcivescoviscostantinopolizzereste voi<br> come si è disarcivescoviscostantinopolizzato<br> l’Arcivescovo di Costantinopoli?",
        "media": "https://unsplash.it/600/300?image=176",
        "author": {
            "name": "Carlo Lollobrigida",
            "image": "https://preview.redd.it/8z6pbsohi5m41.jpg?auto=webp&s=94ff221fcc3d4c778b225b331da5532ccfe16678"
        },
        "likes": 120,
        "created": "3 Months ago"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=179",
        "author": {
            "name": "Morghen Tarquini",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 800,
        "created": "2 Months ago"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=173",
        "author": {
            "name": "Sara Genuardi",
            "image": "https://unsplash.it/300/300?image=7"
        },
        "likes": 275,
        "created": "4 Months ago"
    },
];

// **Milestone 2** - 
// Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.
const postContainer = document.getElementById("container");
createNewElement(postContainer);

// **Milestone 3** - 
// Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.
// Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.
const secondArray = [];






// FUNCTIONS
function createNewElement (container) {
    posts.forEach((element) => {
        const post = document.createElement("div");
        post.classList.add("post");
        post.innerHTML = 
        `
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="${element.author.image}" alt="${element.author.name}">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${element.author.name}</div>
                        <div class="post-meta__time">${element.created}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${element.content}</div>
            <div class="post__image">
                <img src="${element.media}" alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" data-postid="1">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-1" class="js-likes-counter">${element.likes}</b> persone
                    </div>
                </div> 
            </div>         
        `;
        container.append(post);
        post.querySelector('.like-button').addEventListener('click', function () {
            event.preventDefault();
            this.classList.add("like-button--liked");
            secondArray.push(element.id);
            console.log(secondArray);
        });
    });
};