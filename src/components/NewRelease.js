import React from 'react'
import GameCard from './GameCard'
import {GameData} from '../GamesData'

const NewRelease = () => {
    return (
        <div id='newRelease' className='flex flex-col justify-center items-center gap-24 pb-8'>
            <h1 className='text-[55px] text-white text-center heading -mt-2'>New Releases</h1>
            <div className='flex w-11/12 lg:justify-between mx-auto flex-wrap items-center flex-col lg:flex-row lg:gap-0 gap-8'>
                {
                    GameData[2].NewRelease.map((GameData) => (
                        <GameCard GameData={GameData}></GameCard>
                    ))
                }
            </div>
        </div>
    )
}

export default NewRelease