import React from 'react'

const SliderCard = ({GameData}) => {
    return (
        <div className='flex w-8/12 mx-auto gap-12'>
            <div>
                <img src={GameData.img} className=''></img>
            </div>

            <div className='text-white'>
                <h1>{GameData.title}</h1>
                <h2>{GameData.developer}</h2>
                <p>{GameData.description}</p>
                <h2>{GameData.price}</h2>
                <button>Buy Now</button>
            </div>
        </div>
    )
}

export default SliderCard