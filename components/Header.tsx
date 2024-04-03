'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import { MagnifyingGlassIcon,UserCircleIcon } from '@heroicons/react/16/solid'
import Avatar from 'react-avatar'
import { useBoardStore } from '@/store/BoardStore'

function Header() {
    const[board,searchString,setSearchString] = useBoardStore((state) => 
                     [state.board,state.searchString,state.setSearchString])
 
    //console.log("search",searchString)

    useEffect(()=>{
        

    },[board])

    return (
        <header>
            <div className='flex flex-col md:flex-row items-center p-5 bg-gray-500/10'>
                <div className='absolute top-0 left-0 w-full h-96
                                 bg-gradient-to-br from-pink-400 to-blue-500
                                 filter blur-3xl -z-50 opacity-60'/>
                {/* Trello image */}
                <Image
                    src="https://links.papareact.com/c2cdd5"
                    alt="trello logo"
                    width={300}
                    height={100}
                    className='w-44 md:w-56 pb-10 md:pb-0 object-contain'
                />

                <div className='flex items-center space-x-2 flex-1 justify-end w-full'>
                    {/* Search */}
                    <form className='flex items-center space-x-5 bg-white rounded-md shadow-md flex-1 md:flex-initial
                        p-2'>
                        <MagnifyingGlassIcon className='w-6 h-6 text-gray-400' />
                        <input type='text'
                                value={searchString} 
                                onChange={e => setSearchString(e.target.value)} 
                                placeholder="Search" 
                                className='flex-1 outline-none p-2' />
                        <button type='submit' hidden />

                    </form>

                    {/* Avatar */}
                    <Avatar name="Sandhya Sankaran" round size="50" />
                </div>
            </div>

            <div className='flex justify-center p-2 md:py-6'>
                <p className='flex items-center  p-5 shadow-xl bg-white rounded-md font-light
                              text-blue-600 w-fit max-w-3xl italic'>
                    <UserCircleIcon className='h-10 w-10 text-blue-500 mr-2 '/>
                     summarized content will be added later.... summarized content will be added later....
                     summarized content will be added later....
                </p>
            </div>
        </header>

    )
}

export default Header