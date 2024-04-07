import React from 'react'
import Link from 'next/link'
const Header = () => {
  return (
    <div className='w-full h-[60px] flex justify-around items-center  '>
        <p className='text-gradient bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 w-[45px] md:w-[70px] flex justify-center rounded font-bold md:text-[25px]'>SnB</p>
        <div className=' flex justify-around md:w-[400px]'>
        <input className='w-[70%] md:w-[300px] h-[30px] rounded border-2 border-[#0000009c] bg-slate-100 p-2 text-[12px]' placeholder='Find Cars, Mobile and More...' type="search" />
        <button className='text-[15px] md:text-[17px]'>Search</button>
        </div>
        <Link href='/' className='text-[15px] md:text-[17px] underline underline-offset-1'>Login</Link>
    </div>
  )
}

export default Header