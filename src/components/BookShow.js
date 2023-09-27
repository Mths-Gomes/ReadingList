import { useState } from "react";
import BookEdit from './BookEdit';
import useBooksContext from '../hooks/useBooksContext';

function BookShow({ book }) {
  const { deleteBookById } = useBooksContext();
  const [showEdit, setShowEdit] = useState(false);

  const handleDeleteClick = () => {
    deleteBookById(book.id)
  };

  const handleEdit = () => {
    setShowEdit(!showEdit);
  };

  let content = <h3>{book.title}</h3>;

  if (showEdit){
    content = <BookEdit book={book} onSubmit={handleEdit}/>
  }

  return (
    <div className="book-show">
      <img 
        alt='books'
        src={`https://picsum.photos/seed/${book.title}/300/200`}
        style={{borderRadius: 5}}
      />
      <div>{content}</div>
      <div className="actions">
        <button className="edit" onClick={handleEdit}>
          Edit
        </button>
        <button className="delete" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  )
}

export default BookShow;