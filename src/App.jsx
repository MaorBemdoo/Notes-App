import './styles/App.css'
import addIcon from './assets/add-icon.svg'
import AddComp from './components/addComp';
import NoteDivCompilation from './components/notesComp';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [content, setContent] = useState('')
  const [notes, setNotes] = useState(() => {
    const storedNotes = localStorage.getItem('notes');
    return storedNotes ? JSON.parse(storedNotes) : [];
  })

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const [clicked, isClicked] = useState(false)
  // const [edited, isEdited] = useState(false)

  const onChangeEvent = (e) => {
    setContent(e.target.value)
  }

  const onSubmitEvent = (e) => {
    e.preventDefault()
    if(content.trim() == ''){
      return;
    } else{
    setContent('')
    isClicked(false)
    }
    setNotes([{
      content,
      id: uuidv4(),
      bgColor: `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`
    }, ...notes])
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id)
    setNotes(newNotes)
  }

  const propDrilledSubmitHandler = (editingId, editedContent) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === editingId ? { ...note, content: editedContent } : note
      )
    );
  }

  return (
    <>
      <AddComp addIcon={addIcon} isClicked={isClicked} onClickEvent={() => {
        isClicked(!clicked)
      }} clicked={clicked} onSubmitEvent={onSubmitEvent} onChangeEvent={onChangeEvent} content={content} setContent={setContent}/>
      <NoteDivCompilation notes={notes} deleteNote={deleteNote} propDrilledSubmitHandler={propDrilledSubmitHandler}/>
    </>
  )
}

export default App
