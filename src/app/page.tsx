import {useState} from 'react';
import Search from '../components/search';
import MovieCard from '../components/movie-card';
import {Movie} from '..types/movie';

export default function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);

  return (
    <div className = "min-h-screen bg-gray-100 py-8">
      <div className = "container mx-auto px-4">
        <h1 className = "text-4xl font-bold text-center mb-8">Movie Explorer</h1>
        <Search onSearch = {setMovies} />
        <div className = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {movies.map((movie) => (<MovieCard key = {movie.id} movie = {movie} />))}
          </div> 
      </div>
    </div>
  );
}