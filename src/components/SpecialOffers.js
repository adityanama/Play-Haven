import React, { useRef } from 'react'
import {GameData} from '../GamesData'
import SpecialOffercard from './SpecialOfferCard'

const SpecialOffers = () => {

    return (
        <div id="deals"className='flex flex-col justify-center items-center gap-24'>
            <h1 className='text-[55px] text-white text-center heading -mt-12'>Special Offers</h1>
            <div className='flex w-11/12 lg:justify-between mx-auto mb-32 items-center flex-col lg:flex-row lg:gap-0 gap-8'>
                {
                    GameData[1].specialOfferData.map((GameData) => (
                        <SpecialOffercard GameData={GameData}></SpecialOffercard>
                    ))
                }
            </div>
        </div>
    )
}

export default SpecialOffers