"use client"

import {useState} from 'react';
import Search from '@/components/Search';
import MovieCard from '@/components/MovieCard';
import {Movie} from '@/types/movie';

export default function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (query: string) => {
    setIsLoading(true);
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&query=${query}`
    );
      const data = await response.json();
      setMovies(data.results);
      setIsLoading(false);
  };

  return (
    <div className = "min-h-screen py-8">
      <div className = "container mx-auto px-4">
        <h1 className = "text-4xl font-bold text-center mb-8 text-white">
          Movie Explorer
        </h1>
        <Search onSearch = {setMovies} />
        <div className = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {movies.map((movie) => (
            <MovieCard key = {movie.id} movie = {movie} />
          ))}
        </div>
      </div>
    </div>
  );
}

