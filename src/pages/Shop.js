import React, { useState } from 'react'
import {Games} from '../GamesData'
import GameCard from '../components/GameCard';
import SpecialOffercard from '../components/SpecialOfferCard';
import toast from 'react-hot-toast';

const Shop = () => {

    const [value, setValue] = useState(5000);
    const [selected, setSelected] = useState('');


    const getGames = () => {
        let allGames = [...Games];

        if (value < 8000) {
            allGames = allGames.filter(game => game.price <= value);
        }

        if (selected === 'az')
            allGames.sort((a, b) => a.title.localeCompare(b.title));
        else if (selected === 'za')
            allGames.sort((a, b) => b.title.localeCompare(a.title));
        else if(selected === 'sale')
            allGames.sort((a, b) => b.discount - a.discount)

        return allGames;

    }

    const clickHandler = () => {
        setSelected('');
        setValue(5000);
        toast.success("All Filters removed");
    }

    return (
        <div className='bg-[rgb(2,2,36)] pt-48 flex min-h-screen border-t-2 border-white pb-32'>
            <div className='min-w-[320px] text-white border-r-2 border-white pt-6'>
                <h1 className='text-3xl text-center'>Filter</h1>
                <div className='flex flex-col mt-12'>
                    <div className='flex justify-around text-xl'>
                        <h1 className='text-2xl'>Price</h1>
                        <h2 className='text-green-400 text-2xl'>{value}</h2>
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
                        <h2>5000</h2>
                    </div>

                </div>

                <fieldset className='flex flex-col mt-12 gap-4 ml-8'>
                    <div>
                        <input type='checkbox' id='az' checked={selected === 'az'} onChange={(e) => setSelected(e.target.id)}></input>
                        <label htmlFor='az' className='text-xl ml-3'>A to Z</label>
                    </div>
                    <div>
                        <input type='checkbox' id='za' checked={selected === 'za'} onChange={(e) => setSelected(e.target.id)}></input>
                        <label htmlFor='za' className='text-xl ml-3'>Z to A</label>
                    </div>
                    <div>
                        <input type='checkbox' id='sale' checked={selected === 'sale'} onChange={(e) => setSelected(e.target.id)}></input>
                        <label htmlFor='sale' className='text-xl ml-3'>On Sale</label>
                    </div>
                </fieldset>

                <button className='text-xl py-3 px-4 bg-[#282882] rounded-xl hover:bg-[rgb(26,26,87)] duration-100 block mx-auto mt-10' onClick={clickHandler}>Reset Filters</button>
            </div>
            <div className='flex flex-wrap gap-10 items-center ml-16'>
                {
                    getGames().map((game, idx) => {
                        console.log(game.discount);
                        if (game.discount) {
                            return <SpecialOffercard key={idx} GameData={game} />
                        } else {
                            return <GameCard key={idx} GameData={game} />
                        }
                    })
                }
            </div>
        </div>
    )
}

export default Shop