import { useState } from "react";

function BookEdit({ book, onSubmit}) {
  const [ title, setTitle] = useState(book.title);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  }

  const handleSubmitClick = (event) => {
    event.preventDefault();
    onSubmit(book.id, title)
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