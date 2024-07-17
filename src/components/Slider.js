import React, { useState } from 'react'
import SliderCard from './SliderCard'

const Slider = ({ GameData }) => {

    const [index, setIndex] = useState(0);
    const n = GameData[0].sliderData.length;

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
        <div className='relative'>
            <h1 className='text-[55px] text-white text-center mb-12 heading'>Featured Games</h1>
            <SliderCard GameData={GameData[0].sliderData[index]} ></SliderCard>
            <button onClick={()=>rightShiftHandler()}>
                <img src='https://img.icons8.com/?size=100&id=52524&format=png&color=000000' className=' absolute top-[300px] right-24 cursor-pointer hover:scale-110 duration-100' />
            </button>
            <button onClick={()=>leftShiftHandler()}>
                <img src='https://img.icons8.com/?size=100&id=52523&format=png&color=000000' className=' absolute top-[300px] left-24 cursor-pointer hover:scale-110 duration-100' onClick={() => leftShiftHandler} />
            </button>
        </div>
    )
}

export default Slider
