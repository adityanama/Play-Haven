import React from 'react'
import GameCard from './GameCard'
import {GameData} from '../GamesData'

const NewRelease = () => {
    return (
        <div id='newRelease' className='flex flex-col justify-center items-center gap-24'>
            <h1 className='text-[55px] text-white text-center heading -mt-2'>New Releases</h1>
            <div className='flex w-11/12 justify-between mx-auto mb-32 flex-wrap items-center'>
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