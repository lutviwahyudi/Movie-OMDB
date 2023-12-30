$('.search-button').on('click', function () {
    $.ajax({
        url: 'http://www.omdbapi.com/?apikey=b2e42ea8&s=' + $('.input-keyword').val(),
        success: result => {
            const movie = result.Search
            let cards = ''
            movie.forEach(m => {
                cards += showCards(m)
            });
            // panggil cards masukan kedalam html
            $('.movie').html(cards)
    
            // jika tombol detail di klik
            $('.modal-detail-button').on('click', function () {
                $.ajax({
                    url: 'http://www.omdbapi.com/?apikey=b2e42ea8&i=' + $(this).data('imdbid'),
                    success: m => {
                        const detail = showDetail(m)
                        $('.modal-body').html(detail)
                    }
                })
            })
    
        },
        error: e => {
            console.log(e.responseText)
        }
    })
})



function showCards(m) {
    return `<div class="col-md-3 my-4">
            <div class="card" style="width: 18rem;">
                <img src="${m.Poster}" class="card-img-top" alt="">
                <div class="card-body">
                    <h5 class="card-title">${m.Title}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
                    <a href="#" class="btn btn-primary modal-detail-button" data-bs-toggle="modal" data-imdbid="${m.imdbID}" data-bs-target="#movieDetailModal">Show Detail</a>
                </div>
            </div>
        </div>`
}

function showDetail(m) {
   return `<div class="container-fluid">
                        <div class="row">
                            <div class="col-md-3">
                                <img src="${m.Poster}" class="img-fluid">
                            </div>
                            <div class="col-md">
                                <ul class="list-group">
                                    <li class="list-group-item"><h4>${m.Title} (${m.Year})</h4></li>
                                    <li class="list-group-item"><strong>Director : </strong>${m.Director}</li>
                                    <li class="list-group-item"><strong>Actors : </strong>${m.Actors}</li>
                                    <li class="list-group-item"><strong>Writer : </strong>${m.Writer}</li>
                                    <li class="list-group-item"><strong>Plot : </strong> <br>${m.Plot}</li>
                                </ul>
                            </div>
                        </div>
                    </div>`   
}