import {Movie} from '@/types/movie';
import Image from 'next/image';

interface MovieCardProps {
    movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
    const posterUrl = movie.poster_path
      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
      : '/no-poster.jpg'; // Add a placeholder image in the public folder
  
    return (
      <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <div className="relative w-full h-64">
          <Image
                src = {posterUrl}
                alt = {movie.title}
                fill
                className = "object-cover"
                sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority = {false} 
            />
        </div>
        <div className="p-4">
          <h2 className="text-xl font-bold mb-2">{movie.title}</h2>
          <p className="text-gray-600 text-sm mb-2">
            Released: {new Date(movie.release_date).toLocaleDateString()}
          </p>
          <p className="text-gray-700 text-sm mb-4 line-clamp-3">{movie.overview}</p>
          <div className="flex items-center">
            <span className="text-yellow-500 text-lg">★</span>
            <p className="text-gray-800 font-semibold ml-1">
              {movie.vote_average.toFixed(1)}/10
            </p>
          </div>
        </div>
      </div>
    );
  };

export default MovieCard;