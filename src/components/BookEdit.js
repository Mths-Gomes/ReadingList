import { useState } from "react";
import useBooksContext from '../hooks/useBooksContext';

function BookEdit({ book, onSubmit }) {
  const { editBookById } = useBooksContext();
  const [ title, setTitle] = useState(book.title);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  }

  const handleSubmitClick = (event) => {
    event.preventDefault();
    
    editBookById(book.id, title)
    onSubmit();
  };

  return (
    <form className="book-edit" onSubmit={handleSubmitClick}>
      <label>Title</label>
      <input type="text" className="input" value={title} onChange={handleTitleChange}/>
      <button className="button is-primary" type="submit">
        Save
      </button>
    </form>
  )
}

export default BookEdit;
