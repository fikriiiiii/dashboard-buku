import React from 'react';
import Navbar from './navbar';
import Sidebar from './sidebar';

const formUbahBuku = () => {
  return (
    <>
        <Navbar />
        <Sidebar />

        <div className='ml-72 m-[-70px] w-[960px]'>
        <h1 className='text-3xl font-thin'>Ubah Data Buku</h1>
        <form action="" className='mt-5'>
          <label htmlFor="" className='block'>
            <span className='block font-semibold text-sm'>Ubah Judul</span>
            <input type="text" className='w-full block mt-1 border border-white-400 rounded-md p-2' />
          </label>
          <label htmlFor="" className='block mt-5'>
            <span className='block font-semibold text-sm'>Ubah Deskripsi</span>
            <input type="text" className='w-full block mt-1 border border-white-400 rounded-md p-2' />
          </label>
          <label htmlFor="" className='block mt-5'>
            <span className='block font-semibold text-sm'>Ubah Gambar</span>
            <input type="file" className='w-full block mt-1 border border-white-400 rounded-md p-2' />
          </label>
          <button className='w-full block mt-10 text-sm bg-sky-600 border border-1 p-3 rounded-md text-white'>
            Simpan Perubahan
          </button>
        </form>
      </div>
    </>
  )
}

export default formUbahBuku