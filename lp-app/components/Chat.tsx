import React from 'react'

export default function Chat() {
  return (
    <div className='w-full bg-blue-700 h-full text-center'>
        <h1 className='pt-1 font-extrabold'>Chat</h1>
        <input type='text' placeholder='What are we learning today?' className='m-5 p-5 w-[90%] border'/>
    </div>
  )
}
