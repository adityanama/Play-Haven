import React from 'react'
import toast from 'react-hot-toast';

const NewsLetter = () => {

    const clickHandler = () =>{
        toast.success("Thanks for Subscribing");   
    }

    return (
        <div className='ml-16 flex flex-col justify-center gap-16 '>
            <h1 className='text-4xl heading text-center text-white'>Stay Updated with the Latest Game Releases and Deals</h1>
            <div className='flex flex-col gap-4 text-xl border-4 w-8/12 mx-auto p-16 border-blue-800 bg-white text-black rounded-xl'>
                <label htmlFor='name' className=' font-semibold'>Name : </label>
                <input type='text' id='name' className='w-5/12 h-9 rounded-lg outline outline-blue-400'></input>
                <label htmlFor='email' className=' font-semibold' >Email Address : </label>
                <input type='email' id='email' className='w-5/12 h-9 rounded-lg outline outline-blue-400'></input>
                <button className='text-2xl py-3 px-4 bg-[#e62a2a] rounded-xl hover:bg-[rgb(190,32,37)] duration-100 w-[160px] mt-12 font-semibold' onClick={clickHandler}>Subscribe</button>
            </div>
        </div>
    )
}

export default NewsLetter