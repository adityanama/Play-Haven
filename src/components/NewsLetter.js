import React, { useState } from 'react'
import toast from 'react-hot-toast';
import '../App.css'

const NewsLetter = () => {

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      }

    const clickHandler = () =>{
        if(!name || !email)
            toast.error("Please fill all the fields");
        
        
        else
        {
            if(isValidEmail(email))
                toast.success("Thanks for Subscribing");   
            else
                toast.error("Please rnter a valid email address");

        }
    }

    

    return (
        <div className='ml-16 flex flex-col justify-center gap-16 '>
            <h1 className='text-4xl heading text-center text-white'>Stay Updated with the Latest Game Releases and Deals</h1>
            <div className='flex flex-col gap-4 text-xl border-4 w-8/12 mx-auto p-16 border-blue-800 bg-white text-black rounded-xl'>
                <label htmlFor='name' className=' font-semibold'>Name : </label>

                <input type='text' id='name' className='styled-input'></input>

                <label htmlFor='email' className=' font-semibold' >Email Address : </label>

                <input type='email' id='email' className='styled-input' onChange={(event) => setEmail(event.target.value)}></input>

                <button className='text-2xl py-3 px-4 bg-[#e62a2a] rounded-xl hover:bg-[rgb(190,32,37)] duration-100 w-[160px] mt-12 font-semibold text-white' onClick={clickHandler}>Subscribe</button>
            </div>
        </div>
    )
}

export default NewsLetter