import React, {useState,useEffect} from 'react';
import { styled } from 'styled-components';
import { BookItemProps } from './BookListTypes';

const StyledItem = styled.li`
    display: flex;
    flex-direction: column;
    width: 12em;
    padding: .5em;
    margin: .5em;
    border: 1px solid black;
    border-radius: .5em;
    background-color: white;
    box-shadow: .5em .5em .5em .3em rgba(0, 0, 255, .2);
    h4 {
        margin: .5em 0;
    }
    .img-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: .5em;
        margin: .5em;
        margin-top: auto;
        overflow: hidden;
    }
`

const BookItem: React.FC<BookItemProps> = ({book}) => {
    const [imgUrl, setImgUrl] = useState<string | null>(null);
// https://covers.openlibrary.org/b/id/14315081-M.jpg

    useEffect(() => {
        console.log("book", book)
        if(book.covers && book.covers.length > 0) {
            setImgUrl(`https://covers.openlibrary.org/b/id/${book.covers[0]}-M.jpg`)
        }
    },[book])

    return (
        <StyledItem className="book-item">
            <h4>{ book.title }</h4>
            { book.subtitle && <h5>{ book.subtitle }</h5>}
            { imgUrl &&
                <div className='img-wrapper'>
                    <img src={imgUrl} alt={book.title} />
                </div>
            }
        </StyledItem>
    )
}

export default BookItem;