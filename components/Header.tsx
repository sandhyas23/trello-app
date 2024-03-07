'use client'
import React from 'react'
import Image from 'next/image'
import { MagnifyingGlassIcon } from '@heroicons/react/16/solid'
import Avatar from 'react-avatar'

function Header() {
  return (
    <header>
        <div className='flex flex-col md:flex-row items-center p-5 bg-gray-500/10'>
        <Image
         src="https://links.papareact.com/c2cdd5"
         alt ="trello logo"
         width={300}
         height={100}
         className='w-44 md:w-56 pb-10 md:pb-0 object-contain'
         />

        <div className='flex items-center space-x-2 flex-1 justify-end'>
        {/* Search */}
         <form className='flex items-center space-x-5 bg-white rounded-md shadow-md 
                        p-2'>
            <MagnifyingGlassIcon className='w-6 h-6 text-gray-400' />
            <input type='text' placeholder="Search" className='flex-1 outline-none p-2 md:flex-initial'/>
            <button type='submit' hidden/>

         </form>

         {/* Avatar */}
         <Avatar name="Sandhya Sankaran" round size="50"/>
        </div>
         
         </div>
    </header>
    
  )
}

export default Header