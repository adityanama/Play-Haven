import React, { useState } from 'react'
import { useNavigate } from 'react-router';

const Search = ({setSearch}) => {

    const [value, setValue] = useState('')
    const navigate = useNavigate();

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    const handleSearch = () => {
        setSearch(false)
        navigate(`/store?query=${value}`)
    }

    return (
        <div className='relative w-[490px] h-fit mx-auto z-50 mt-10 -mb-[88px]'>
            <input
                className='w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-600'
                type='text'
                placeholder="Search for a game and press Enter"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={handleKeyDown}
            />            
        </div>
    )
}

export default Search