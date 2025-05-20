import axios from 'axios';
import { useState } from 'react';


const Homepage = () => {
    const [searchMovie, setSearchMovie] = useState("");
    const [filteredMovie, setFilteredMovie] = useState([]);

    // funzione che mostra i film
    const showMovies = () => {
        axios.get('https://api.themoviedb.org/3/search/movie?api_key=babf73305aa1b9cdda4286f732c56045&query=' + searchMovie).then((response) => {
            setFilteredMovie(response.data.results);
            console.log(response.data.results)
        })
    }


    return (
        <>
            <div className="container">
                <div className="row text-center mt-4">
                    <div className="col-12">
                        <input type="text" placeholder='Cerca..' value={searchMovie} onChange={(e) => { setSearchMovie(e.target.value) }} />
                        <button className='btn btn-primary' onClick={showMovies}>Search</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        {filteredMovie.map((film) => {
                            return (
                                <div className="col-4" key={film.id}>
                                    <div className="card">
                                        <div className="card-body">
                                            <h5>{film.title}</h5>
                                            <p>{film.overview}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Homepage;
