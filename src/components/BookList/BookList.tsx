import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { styled } from 'styled-components';
import BookItem from './BookItem';
import { BookItemType } from './BookListTypes';

const StyledList = styled.ul`
    display: flex;
    flex-flow: row wrap;
`

const baseUrl = `https://openlibrary.org`;

const BookList: React.FC = () => {
    const [books, setBooks] = useState<BookItemType[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [nextUrl, setNextUrl] = useState<string>(`${baseUrl}/authors/OL1394865A/works.json`);
    const [pevUrl, setPrevUrl] = useState<string>('');

    useEffect(() => {
        fetchBooks(nextUrl);
    },[]);

    const fetchBooks = async(currUrl:string) => {
        setLoading(true);
        try {
            const response = await axios.get(currUrl);
            setBooks(response.data.entries);
            if(response.data.links.next) setNextUrl(`${baseUrl}${response.data.links.next}`);
            else setNextUrl('');
            if(response.data.links.prev) setPrevUrl(`${baseUrl}${response.data.links.prev}`)
            else setPrevUrl('');
            setLoading(false);
        } catch (err) {
            console.error('Error fetching books:', err);
            setLoading(false);
        }
    }

    return (
        <div className='book-list'>
            <h2>Book List</h2>
            { loading ? (
                <p>Loading...</p>
            ) : (
                <>
                <StyledList>
                    { books.map(book =>(
                        <BookItem key={ book.key } book={ book }/>
                    )) }
                </StyledList>
                { pevUrl && <button onClick={() => fetchBooks(pevUrl)}>
                    prev 
                </button>}
                { nextUrl && <button onClick={() => fetchBooks(nextUrl)}>
                    next 
                </button>
                }
                </>
            )}
        </div>
    )
}

export default BookList