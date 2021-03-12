/* Movie Cards Function */

let moviesArray = JSON.parse(moviesData);

createMoviesCards(moviesArray);


        function createMoviesCards(data) {
            let movie = document.getElementById("movieCard")
                for (let i = 0; i < data.length; i++) {
                    let card = `<div class="col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center">
                                    <div class="card mb-3" style="max-width: 540px;">
                                            <div class="row g-0 border-blue">
                                                <div class="col-5 col-xs-5">
                                                    <img src="${data[i].image}" alt="..." width="190px" height="273px" style="object-fit:cover;">
                                                </div>
                                                <div class="col-7 col-xs-7">
                                                    <div class="card-body">
                                                        <h5 class="card-title fs-3">${data[i].movieName}</h5>
                                                        <p class="fst-italic">Director: ${data[i].director}</p>
                                                        <p class="card-text fw-light">${data[i].description}</p>
                                                    </div>
                                                    <div class="card-body d-flex justify-content-end align-items-center">
                                                    <h5>Like <i class="fa">&#xf105;</i> <i onclick="incrementer()" style="font-size:24px; cursor: pointer" class="fa thumbsUp">&#xf087;</i></h5>
                                                    <h3 class="px-1"><span class="badge bg-blue text-dark badgeShape">${data[i].likes}</span></h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                </div>`
                    movie.innerHTML += card
                     
                }

        }
    

/* LIKES Button Function */

let i = 0;
    function incrementer() {
        document.getElementsByClassName("badgeShape").value = ++i;
    }
