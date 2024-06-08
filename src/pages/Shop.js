import React, { useState } from 'react'
import GameData from '../GamesData'
import GameCard from '../components/GameCard';

const Shop = () => {

    const [value, setValue] = useState(5000);

    function shuffleArray(array) {
        let currentIndex = array.length, randomIndex;

        while (currentIndex !== 0) {

            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }

        return array;
    }


    const getGames = () => {
        let allGames = [];

        GameData.map((GameObj) => {
            const key = Object.keys(GameObj)[0];
            const games = GameObj[key];

            games.forEach(game => {
                allGames.push(game);
            })
        })

        if (value < 8000) {
            allGames = allGames.filter(game => game.price <= value);
        }

        return shuffleArray(allGames);

    }

    return (
        <div className='bg-[rgb(2,2,36)] pt-48 flex min-h-screen border-t-2 border-white'>
            <div className='w-[400px] text-white border-r-2 border-white pt-6'>
                <h1 className='text-3xl text-center'>Filter</h1>
                <div className='flex flex-col mt-12'>
                    <div className='flex justify-around text-xl'>
                        <h1>Price</h1>
                        <h2 className='text-green-400'>{value}</h2>
                    </div>
                    <input
                        type="range"
                        id="slider"
                        min="2000"
                        max="5000"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        className="w-9/12 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 mt-8 mx-auto block"
                    />

                    <div className='flex justify-between w-9/12 mx-auto mt-2'>
                        <h2>2000</h2>
                        <h2>8000</h2>
                    </div>

                </div>
            </div>
            <div className='w-[1500px] flex flex-wrap justify-center gap-10 items-center mr-6'>
                {
                    getGames().map((game, idx) => (<GameCard key={idx} GameData={game} />))
                }
            </div>
        </div>
    )
}

export default Shop