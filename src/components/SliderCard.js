import React from 'react'

const SliderCard = ({ GameData }) => {
    return (
        <div className='flex mx-auto gap-16 justify-center slider-bg mb-16 py-12 items-center work-font border-y-[4px] border-indigo-900'>
            <div>
                <img src={GameData.img} className='rounded-lg'></img>
            </div>

            <div className='text-white flex flex-col w-[610px] gap-2'>
                <h1 className='text-5xl font-bold text-yellow-400 underline'>{GameData.title}</h1>
                <h2 className='text-xl font-semibold'>{GameData.developer}</h2>
                <p className='text-lg text-white mt-4'>{GameData.description.substr(0, 300) + "..."}</p>
                <div className='flex items-center -mt-2'>
                    <img src='https://img.icons8.com/?size=100&id=87769&format=png&color=FFFFFF' className=' scale-50 -ml-8' />
                    <h2 className='text-5xl -ml-6 text-green-400 font-semibold'>{GameData.price}</h2>
                </div>
                <div className='flex gap-12'>
                    <button className='text-2xl py-3 px-4 bg-[rgba(2,2,100)] rounded-xl hover:bg-[rgb(3,3,44)] duration-100 w-4/12 -mt-2 text-white font-semibold'>Add to Cart</button>
                    <button className='text-2xl py-3 px-4 bg-[rgba(2,2,100)] rounded-xl hover:bg-[rgb(3,3,44)] duration-100 w-4/12 -mt-2 text-white font-semibold'>View in Store</button>
                </div>
            </div>
        </div>
    )
}

export default SliderCard