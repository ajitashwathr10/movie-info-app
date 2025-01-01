import { useState } from 'react';
import axios from 'axios';
import { Movie } from '../types/movie';

interface SearchProps {
    onSearch: (movies: Movie[]) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
    const [query, setQuery] = useState('');
    const handleSearch = async(e: React.FormEvent) => {
        e.preventDefault();
        const response = await axios.get(
            `https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&query=${query}`
        );
        onSearch(response.data.results);
    };
    return (
        <form onSubmit = {handleSearch} className = "flex justify-center my-8">
            <input
                type = "text"
                value = {query}
                onChange = {(e) => setQuery(e.target.value)}
                placeholder = "Search for a movie..."
                className = "px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button 
                    type = "submit"
                    className = "px-4 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    Search
                </button>
        </form>
    );
};

export default Search;