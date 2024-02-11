import React from 'react'

import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import { PiBookOpenTextlight } from 'react-icons/pi';
import { BiUserCircle } from 'react-icons/bi';

const BookSingleCard = ({book}) => {
  return (
    <div
        key={book._id}
        className='border-2 border-sky-400 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl'
    >
        <h2 className='absolute top-1 right-2 px-4 py-1 bg-red-800 rounded-lg'>{book.publishYear}</h2>
        <h4 className='my-2 text-gray-500'>{book._id}</h4>
        <div className='flex items-center justify-start gap-x-2'>
            <PiBookOpenTextlight className='text-red-200 text-2xl' />
            <h2 className='my-1'>{book.title}</h2>
        </div>
        <div className='flex items-center justify-start gap-x-2'>
            <BiUserCircle className='text-red-200 text-2xl' />
            <h2 className='my-1'>{book.author}</h2>
        </div>
        <div className='flex items-center justify-between gap-x-2 mt-4 p-4'>
            <Link to={`/books/details/${book._id}`}>
                <BsInfoCircle className='text-green-800 text-2xl hover:text-black' />
            </Link>
            <Link to={`/books/edit/${book._id}`}>
                <AiOutlineEdit className='text-yellow-800 text-2xl hover:text-black' />
            </Link>
            <Link to={`/books/delete/${book._id}`}>
                <MdOutlineDelete className='text-red-800 text-2xl hover:text-black' />
            </Link>
        </div>
    </div>
  )
}

export default BooksSingleCard