import axios from 'axios';
import { useState } from 'react';


const Homepage = () => {
    const [searchMovie, setSearchMovie] = useState("");
    const [filteredMovie, setFilteredMovie] = useState([]);
    const [searchSeries, setSearchSeries] = useState([]);

    // funzione che mostra i film
    const showMovies = () => {
        axios.get('https://api.themoviedb.org/3/search/movie?api_key=babf73305aa1b9cdda4286f732c56045&query=' + searchMovie).then((response) => {
            setFilteredMovie(response.data.results);
            console.log(response.data.results)
        })

        axios.get('https://api.themoviedb.org/3/search/tv?api_key=babf73305aa1b9cdda4286f732c56045&language=it_IT&query=' + searchMovie).then((response) => {
            setSearchSeries(response.data.results);
        })
    }


    return (
        <>
            <header>
                <h1>BOOLFLIX</h1>
                <div className="row text-center p-4">
                    <div className="col-12 d-flex ">
                        <input className='form-control me-4' type="text" placeholder='Cerca..' value={searchMovie} onChange={(e) => { setSearchMovie(e.target.value) }} />
                        <button className='btn btn-dark' onClick={showMovies}>Search</button>
                    </div>
                </div>
            </header>

            <div className="container">

                <div className="row">
                    <h2 className='mt-4 mb-5'>FILM</h2>
                    {filteredMovie.map((film) => {
                        return (
                            <div key={film.id} className="col-4 mb-4">
                                <div className="card h-100">
                                    <img src={`https://image.tmdb.org/t/p/w342${film.poster_path}`} className="card-img-top" alt="..." />
                                    <hr />
                                    <div className="card-body">
                                        <h5 className="card-title">{film.title}</h5>
                                        <p className="card-text"><em><strong>Overview</strong></em><br />{film.overview}</p>
                                    </div>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item"><p><em><strong>Titolo originale</strong></em></p>{film.original_title}</li>
                                        <li className="list-group-item"><p><em><strong>Lingua</strong></em></p>{film.original_language}</li>
                                        <li className="list-group-item"><p><em><strong>Vote</strong></em></p>{Math.round(film.vote_average / 2)}</li>
                                    </ul>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="row">
                    <h2 className='mt-4 mb-5'>SERIE TV</h2>
                    {searchSeries.map((serie) => {
                        return (
                            <div key={serie.id} className="col-4 mb-4">
                                <div className="card h-100">
                                    <img src={`https://image.tmdb.org/t/p/w342${serie.poster_path}`} className="card-img-top" alt="..." />
                                    <hr />
                                    <div className="card-body">
                                        <h5 className="card-title">{serie.name}</h5>
                                        <p className="card-text"><em><strong>Overview</strong></em><br />{serie.overview}</p>
                                    </div>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item"><p><em><strong>Titolo originale</strong></em></p>{serie.name}</li>
                                        <li className="list-group-item"><p><em><strong>Lingua</strong></em></p>{serie.original_language}</li>
                                        <li className="list-group-item"><p><em><strong>Vote</strong></em></p>{Math.round(serie.vote_average / 2)}</li>
                                    </ul>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Homepage;


