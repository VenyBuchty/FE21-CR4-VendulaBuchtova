/* initialize Movie Cards */

let moviesArray = JSON.parse(moviesData);

createMoviesCards(moviesArray);


        function createMoviesCards(data) {
            let movie = document.getElementById("movieCard")
                for (let i = 0; i < data.length; i++) {
                    let card = `<div id="${[i]}" class="col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center">
                                    <div class="card mb-3" style="width: 590px; height:300px">
                                            <div class="row g-0 box-shadow">
                                                <div class="col-5 ">
                                                    <img src="${data[i].image}" alt="..." width="230px" height="300px" style="object-fit:cover;" class="movieImg">
                                                </div>
                                                <div class="col-7 ">
                                                    <div class="card-body d-flex align-items-start flex-column bd-highlight " style="height:100%">
                                                        <h5 class="card-title">${data[i].movieName}</h5>
                                                        <p class="fst-italic">Director: ${data[i].director}</p>
                                                        <p class="card-text fw-light">${data[i].description}</p>
                                                        <div class="d-flex mt-auto bd-highlight  align-items-center align-self-end">
                                                            <div class="p-2 bd-highlight">
                                                                <h5>Like 
                                                                <i class="fa">&#xf105;</i> 
                                                                </h5>
                                                            </div>
                                                            <div class="p-2 bd-highlight">
                                                                <h5>
                                                                <i style="font-size:24px; cursor: pointer" class="fa" id="thumbsUp">&#xf087;</i>
                                                                </h5>
                                                            </div>
                                                            <div class="p-2 bd-highlight">
                                                                <h3 class="px-1">
                                                                <span class="badge bg-blue text-dark badgeShape">${data[i].likes}</span>
                                                                </h3>
                                                            </div>
                                                        </div>
                                                </div>
                                            </div>
                                    </div>
                                </div>`
                    movie.innerHTML += card
                }
        }
    



let theParent = document.querySelector("#movieCard")
theParent.addEventListener("click", incrementLike);


function incrementLike (e){
    if(e.target.id == "thumbsUp") {
        /* remove old movieArray */
        let movie = document.getElementById("movieCard")
        movie.innerHTML =""
        /* find card index and updated likes */
        let cardID = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.id
        moviesArray[cardID].likes += 1;
        /* create movieArray with new like value */
        createMoviesCards(moviesArray);
        console.log(moviesArray);
    };
        
}



let sorting = document.querySelector("#sort")
sorting.addEventListener("click", cardSort);

let isAscending = true;


function cardSort (e){
    if(e.target.id == "sort") {
        /* remove old movieArray */
        let movie = document.getElementById("movieCard")
        movie.innerHTML =""
        isAscending = !isAscending;
        /* sort movieArray */
        moviesArray.sort((a, b) => {
        if (isAscending) {
            return b.likes - a.likes;
        } else {
            return a.likes - b.likes;
        }
        
    });

    /* create new sorted movieArray */
    createMoviesCards(moviesArray);
        
    }

};






/* 
Tried to solve it like we leard in course last week, but I wasn't able to ....


let giveLike = document.getElementsByClassName("thumbsUp");
let numberLikes = document.getElementsByClassName("badgeShape");
for (let like of giveLike) {
            like.addEventListener("click", incrementLike);
        }

function incrementLike (){
        numberLikes.innerHTML = parseInt(numberLikes.innerHTML) +1;
    }; 

_______________________________________________________________

let giveLike = document.getElementsByClassName("thumbsUp");
let numberLikes = document.getElementsByClassName("badgeShape");
for(let i = 0 ; i < giveLike.length; i++) {
            giveLike.addEventListener("click", incrementLike);
        }

function incrementLike (){
        numberLikes.innerHTML = parseInt(numberLikes.innerHTML) +1;
    };
*/

    
    
