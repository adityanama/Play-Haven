import React, { useState } from 'react'
import SliderCard from './SliderCard'

const Slider = ({GamesData}) => {

    const [index, setIndex] = useState(0);
    const n = GamesData.length;

    function leftShiftHandler() {
        if (index == 0)
            setIndex(n - 1);
        else
            setIndex(index - 1);
    }

    function rightShiftHandler() {
        if (index == n - 1)
            setIndex(0);
        else
            setIndex(index + 1);
    }

    return (
        <div>
            <h1 className='text-[55px] text-white text-center mb-24'>Featured Games</h1>
            <SliderCard GameData = {GamesData[index]} ></SliderCard>
        </div>
    )
}

export default Slider
