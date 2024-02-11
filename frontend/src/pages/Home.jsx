import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import BoosTable from '../components/home/BoosTable';
import BooksCard from '../components/home/BooksCard';

const Home = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showType, setShowType] = useState('table');

    useEffect(() => {
        setLoading(true);
        axios
            .get('http://localhost:5555/books')
            .then((res) => {
                setBooks(res.data.data);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            })
    }, []);
    return (
        <div className='p-4'>
            <div className='flex justify-center items-center gap-x-4'>
                <button className='bg-sky-800 text-white px-4 py-1 rounded-lg w-fit hover:bg-sky-700' onClick={() => setShowType('table')}>
                    Table
                </button>
                <button className='bg-sky-800 text-white px-4 py-1 rounded-lg w-fit hover:bg-sky-700' onClick={() => setShowType('card')}>
                    Card
                </button>
            </div>
            <div className='flex justify-between items-center'>
                <h1 className='text-3xl my-8'>Books list</h1>
                <Link to='/book/create'>
                    <MdOutlineAddBox className='text-sky-800 text-4xl' />
                </Link>
            </div>
            { loading ? <Spinner /> : showType === 'table' ? <BoosTable books={books}/> : <BooksCard books={books}/>}
            Home
        </div>
    )
}

export default Home