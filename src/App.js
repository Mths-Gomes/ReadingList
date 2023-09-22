import { useEffect, useState } from "react";
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import axios from "axios";

function App(){
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    const response = await axios.get('http://localhost:3001/books');

    if(response.status === 200)
      setBooks(response.data)
  };

  const deleteBookById = async (id) => {
    const response = await axios.delete(`http://localhost:3001/books/${id}`);

    if (response.status === 200){
      const updatedBooks = books.filter((book) => {
        return book.id !== id;
      })
  
      setBooks(updatedBooks);
    }
  };

  const editBookById = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
    });
    
    if(response.status === 200){
      const updatedBooks = books.map((book) => {
        if(book.id === id){
          return {...book, ...response.data};
        }
  
        return book;
      });
  
      setBooks(updatedBooks);
    }
  };

  const createBook = async (title) => {
    const response = await axios.post('http://localhost:3001/books', {
      title
    });

    if(response.status === 201){
      const updatedBooks = [
        ...books, 
        response.data
      ]
  
      setBooks(updatedBooks);
    }
  };

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList books={books} onDelete={deleteBookById} onEdit={editBookById}/>
      <BookCreate onCreate={createBook}/>
    </div>
  );
}

export default App;  