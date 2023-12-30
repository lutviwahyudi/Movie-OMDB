$.ajax({
    url: 'http://www.omdbapi.com/?apikey=b2e42ea8&s=avatar',
    success: result => {
        const movie = result.Search
        let cards = ''
        movie.forEach(m => {
            cards += ` <div class="col-md-3 my-4">
            <div class="card" style="width: 18rem;">
                <img src="${m.Poster}" class="card-img-top" alt="">
                <div class="card-body">
                    <h5 class="card-title">${m.Title}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
                    <a href="#" class="btn btn-primary">Show Detail</a>
                </div>
            </div>
        </div>`
        });
        // panggil cards masukan kedalam html
        $('.movie').html(cards)
    },
    error: e => {
        console.log(e.responseText)
    }
})