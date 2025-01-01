import {Movie} from '..types/movie';

interface MovieCardProps {
    movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
    return(
        <div className = "bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
                src = {`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt = {movie.title}
                className = "w-full h-64 object-cover object-center"
            />
            <div className = "p-4">
                <h2 className = "text-xl font-bold mb-2">{movie.title}</h2>
                <p className = "text-gray-600 text-sm mb-2">{movie.release_date}</p>
                <p className = "text-gray-700 text-sm mb-4">{movie.overview}</p>
                <p className = "text-gray-800 font-semibold">Rating: {movie.vote_average}</p>
            </div>
        </div>
    );
};

export default MovieCard;