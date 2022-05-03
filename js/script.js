// **Milestone 1** - Creiamo il nostro array di oggetti che rappresentano ciascun post (come da esempio).
// Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Vitantonio Paparella",
            "image": "https://unsplash.it/300/300?image=1"
        },
        "likes": 1380,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=176",
        "author": {
            "name": "Carlo Lollobrigida",
            "image": "https://unsplash.it/300/300?image=3"
        },
        "likes": 120,
        "created": "2022-02-22"
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
        "created": "2021-03-14"
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
        "created": "2021-01-01"
    },
];

// **Milestone 2** - 
// Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.
const postContainer = document.getElementById("container");
createNewElement(postContainer);






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
    });
};