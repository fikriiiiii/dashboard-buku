import React from 'react'

const login = () => {
  return (
    <>
        <div className='container mt-40 max-w-sm bg-white m-auto p-10 rounded-md shadow-lg'>
        <h1 className='text-3xl font-thin text-center'>LOGIN</h1>
        <form action="" className='mt-5'>
          <label htmlFor="" className='block'>
            <span className='block font-semibold text-sm'>Email Address</span>
            <input type="text" className='w-full block mt-1 border border-white-400 rounded-md p-2' />
          </label>
          <label htmlFor="" className='block mt-5'>
            <span className='block font-semibold text-sm'>Password</span>
            <input type="text" className='w-full block mt-1 border border-white-400 rounded-md p-2' />
          </label>
          <button className='w-full block mt-10 text-sm bg-sky-600 border border-1 p-3 rounded-md text-white'>
            Login
          </button>
        </form>
      </div>
    </>
  )
}

export default login