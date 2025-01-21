import React from 'react';
import MovieCard from '../components/MovieCard';
import { useState,useEffect } from 'react';
import { searchMovies,getPopularMovies } from '../services/api.js';
import "../css/Home.css";
function Home(){
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [error,setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const loadPopularMovies = async ()=>{
            try{
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies)
            }catch(err){
                console.log(err)
                setError("Error loading")
            }
            finally{
                setLoading(false);
            }

        }
        loadPopularMovies()
    },[])


    const handleSearch =async (e)=>{
        e.preventDefault();
        console.log(searchQuery);
        if(!searchQuery.trim()) return
        if(loading) return
        setLoading(true)
        try {
            const searchResults = await searchMovies(searchQuery);
            setMovies(searchResults)
            setError(null)
        } catch (error) {
            setError("Failed to load search...")
        }finally{
            setLoading(false)
        }
        
    }

    return (
<>
        <div className="home">
            <form onSubmit={(e)=>{handleSearch(e)}} className="search-form">
                <input type="text" placeholder="Search for a movie ...." name="search-input" value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)} />
                <button type="submit" className="search-button">Search</button>
            </form>
            {error && <div className="error-message">{error}</div>}
            {loading?(<div className="loading">Loading....</div>):(<div className="movies-grid">
                {movies.map(movie => (<MovieCard movie={movie} key={movie.id}/>))}  {/* movie.title.toLowerCase().startsWith(searchQuery)&&*/}
            </div>)}
        </div>


</>

    )
}

export default Home;