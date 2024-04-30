import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BookItemType } from './BookListTypes';

const baseUrl = `https://openlibrary.org`;

const BookList: React.FC = () => {
    const [books, setBooks] = useState<BookItemType[]>([]);
    const [nextUrl, setNextUrl] = useState<string>(`${baseUrl}/authors/OL1394865A/works.json`);
    // const [pevUrl, setPrevUrl] = useState<string | null>(null);

    useEffect(() => {
        fetchBooks();
    },[]);

    const fetchBooks = () => {
        axios.get(nextUrl).then((response) => {
            setBooks(response.data.entries);
            if(response.data.links.next) setNextUrl(`${baseUrl}${response.data.links.next}`);
            // if(response.data.links.prev) setPrevUrl(`${baseUrl}${response.data.links.prev}`);
            console.log(response.data);
        }).catch((error) => {
            console.error('Error fetching books:', error);
        });
    }

    return (
        <div className='book-list'>
            <h2>Book List</h2>
            <ul>
                {books.map(book =>(
                    <li key={ book.key }>{ book.title }</li>
                ))}
            </ul>
            <button onClick={() => fetchBooks()}>
                next 
            </button>
        </div>
    )
}

export default BookList