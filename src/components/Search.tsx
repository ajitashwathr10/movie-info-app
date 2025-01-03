"use client";

import {useState} from 'react';
import axios from 'axios';
import {Movie} from '@/types/movie';

interface SearchProps {
    onSearch: (movies: Movie[]) => void;
}

const Search: React.FC<SearchProps> = ({onSearch}) => {
    const [query, setQuery] = useState('');
    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault();
        const response = await axios.get(
            `https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&query=${query}`
        );
        onSearch(response.data.results);
    };

    return (
        <form onSubmit = {handleSearch} className = "flex justify-center my-8">
            <div className = "relative w-full max-w-md">
                <input
                    type = "text"
                    value = {query}
                    onChange = {(e) => setQuery(e.target.value)}
                    placeholder = "Search for a movie"
                    className = "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                />
                <button
                    type = "submit"
                    className = "absolute right-3 top-1/2 transform -translate-y-1/2 p-2 text-gray-500 hover:text-blue-500 focus:outline-none"
                >
                    <svg
                        xmlns = "https://www.w3.org/2000/svg"
                        className = "h-6 w-6"
                        fill = "none"
                        viewBox = "0 0 24 24"
                        stroke = "currentColor"
                    >
                        <path
                            strokeLinecap = "round"
                            strokeLinejoin = "round"
                            strokeWidth = {2}
                            d = "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </button>
            </div>
        </form>
    );
};

export default Search;