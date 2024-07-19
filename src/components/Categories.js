import React from 'react'

const Categories = () => {
  return (
    <div>
        <h1 className='text-[55px] text-white text-center heading'>Categories</h1>

        <div className='flex flex-col lg:flex-row items-center justify-between -mt-16 ml-8'>
            <img src='https://www.freepnglogos.com/uploads/windows-logo-png/windows-logo-logok-0.png' className='h-[300px] hover:scale-125 duration-150' title='Windows'></img>
            <img src='https://static-00.iconduck.com/assets.00/playstation-icon-512x417-c27cqp2p.png' className='scale-40 scale-y-40 hover:scale-50 duration-150' title='Playstation'></img>
            <img src='https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/387_Xbox_logo-512.png' className='scale-30 hover:scale-40 duration-150' title='Xbox'></img>
            
        </div>
    </div>
  )
}

export default Categories