const Book = (props) => {
  console.log(props);
  const { img, title, author, getBook, id, number } = props;

  const getSingleBook = () => {
    getBook(id);
  };

  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author} </h4>
      <span className='number'>{`# ${number + 1}`}</span>

      {/* <button onClick={() => getBook(id)}> display title </button>*/}
    </article>
  );
};

export default Book;
