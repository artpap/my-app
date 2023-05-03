import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { books } from './books';
import Book from './Book';
import { useEffect } from 'react';

function BookList() {
  const getBook = (id) => {
    const book = books.find((book) => book.id === id);
    console.log(book);
  };

  return (
    <>
      n<h1>amazon best sellers</h1>
      <section className='booklist'>
        {
          //list item is an object, which cannot be rendered in React. So we use the map function which maps it to html code
          books.map((book, index) => {
            return (
              <Book {...book} key={book.id} number={index} getBook={getBook} />
            ); //Passing the book object as props
          })
        }
      </section>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
