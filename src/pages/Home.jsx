import { useEffect, useState } from "react";
import getDiscover from "../services/getDiscover";
import SearchBar from "../components/SearchBar";

function Home() {
    const [popularMovies, setPopularMovies] = useState([])
    const [popularSeries, setPopularSeries] = useState([])
    const [popularPeople, setPopularPeople] = useState([])

    useEffect(() => {
        const fetchMovies = async () => {
            const movies = await getDiscover('movie', {
                page: 1
            })
            setPopularMovies(movies.data.results)
        }
        const fetchSeries = async () => {
            const series = await getDiscover('tv', {
                page: 1
            })
            setPopularSeries(series.data.results)
        }
        const fetchPeople = async () => {
            const people = await getDiscover('person', {
                page: 1
            })
            setPopularPeople(people.data.results)
        }
        fetchMovies()
        fetchSeries()
        fetchPeople()
    }, [])


    return (
        <>
            <SearchBar />
            <div className="home">
                <h2>Popular Movies</h2>
                {
                    popularMovies.map((movie) => {
                        
                    })
                }
            </div>
        </>
    )
}

export default Home