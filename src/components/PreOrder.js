import React from 'react'
import GameCard from './GameCard'
import GameData from '../GamesData'

const PreOrder = () => {
    return (
        <div>
            <div className='flex flex-col justify-center items-center gap-24'>
            <h1 className='text-[55px] text-white text-center heading -mt-2'>Pre Order</h1>
            <div className='flex w-11/12 justify-between mx-auto mb-32 flex-wrap items-center'>
                {
                    GameData[3].PreOrder.map((GameData) => (
                        <GameCard GameData={GameData}></GameCard>
                    ))
                }
            </div>
        </div>
        </div>
    )
}

export default PreOrder