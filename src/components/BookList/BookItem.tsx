import React from 'react';
import { styled } from 'styled-components';
import { BookItemProps } from './BookListTypes';

const StyledItem = styled.li`
    display: flex;
    flex-direction: column;
    width: 10em;
    height: 10em;
    padding: .5em;
    margin: .5em;
    border: 1px solid black;
    border-radius: .5em;
    background-color: white;
    box-shadow: 1em 1em .5em .3em rgba(0, 0, 255, .2);
`

const BookItem: React.FC<BookItemProps> = ({book}) => {
    return (
        <StyledItem className="book-item">
            <h4>{ book.title }</h4>
            { book.subtitle && <h4>{ book.subtitle }</h4>}
        </StyledItem>
    )
}

export default BookItem;