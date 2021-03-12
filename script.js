/* Movie Cards Function */

let moviesArray = JSON.parse(moviesData);

createMoviesCards(moviesArray);


        function createMoviesCards(data) {
            let movie = document.getElementById("movieCard")
                for (let i = 0; i < data.length; i++) {
                    let card = `<div id="${[i]}" class="col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center">
                                    <div class="card mb-3" style="width: 590px; height:300px">
                                            <div class="row g-0 box-shadow">
                                                <div class="col-6 col-md-5 col-sm-6">
                                                    <img src="${data[i].image}" alt="..." width="230px" height="300px" style="object-fit:cover;" class="movieImg">
                                                </div>
                                                <div class="col-6 col-md-7 col-sm-6">
                                                    <div class="card-body">
                                                        <h5 class="card-title fs-2">${data[i].movieName}</h5>
                                                        <p class="fst-italic">Director: ${data[i].director}</p>
                                                        <p class="card-text fw-light">${data[i].description}</p>
                                                    </div>
                                                    <div class="card-body d-flex justify-content-end align-items-center my-2">
                                                        <h5>Like 
                                                            <i class="fa">&#xf105;</i> 
                                                            <i style="font-size:24px; cursor: pointer" class="fa" id="thumbsUp">&#xf087;</i>
                                                        </h5>
                                                        <h3 class="px-1">
                                                            <span class="badge bg-blue text-dark badgeShape">${data[i].likes}</span>
                                                        </h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                </div>`
                    movie.innerHTML += card
                }

        }
    

/* LIKES Button Function */

/* 
let giveLike = document.getElementsByClassName("thumbsUp");
let numberLikes = document.getElementsByClassName("badgeShape");
for (let like of giveLike) {
            like.addEventListener("click", incrementLike);
        }

function incrementLike (){
        numberLikes.innerHTML = parseInt(numberLikes.innerHTML) +1;
    }; */


/* Increament LIKES in ARRAY */

let theParent = document.querySelector("#movieCard")
theParent.addEventListener("click", incrementLike, false);


function incrementLike (e){
        if (e.target !== e.currentTarget) {
            if(e.target.id == "thumbsUp") {
                let cardID = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.id
                moviesArray[cardID].likes += 1;
                console.log(moviesArray);
            };
        }
    }


/* Increament LIKES in BROWSER */
let theParent2 = document.querySelector("#movieCard")
theParent2.addEventListener("click", incrementLikeBrowser, false);

console.log(moviesArray);

function incrementLikeBrowser (e){
        if (e.target !== e.currentTarget) {
            if(e.target.id == "thumbsUp") {
                let likeamount = e.target.parentNode.parentNode.querySelector(".badgeShape")
                likeamount.innerHTML = parseInt(likeamount.innerHTML) +1 
            };
        }
    }






/*
let giveLike = document.getElementsByClassName("thumbsUp");
let numberLikes = document.getElementsByClassName("badgeShape");
for(let i = 0 ; i < giveLike.length; i++) {
            giveLike.addEventListener("click", incrementLike);
        }

function incrementLike (){
        numberLikes.innerHTML = parseInt(numberLikes.innerHTML) +1;
    };
*/

    
    
