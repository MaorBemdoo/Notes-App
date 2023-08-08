import './styles/App.css'
import addIcon from './assets/add-icon.svg'
import AddComp from './components/addComp';
import NoteDivCompilation from './components/notesComp';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [content, setContent] = useState('')
  const [notes, setNotes] = useState([])
  const [clicked, isClicked] = useState(false)

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
    // localStorage.setItem("NotesStore", JSON.stringify(notes))
  }

  const deleteNote = (id) => {
    let newNotes = notes.filter((note) => {
      note.id !== id
    })
    setNotes(newNotes)
  }

  return (
    <>
      <AddComp addIcon={addIcon} isClicked={isClicked} onClickEvent={() => {
        isClicked(!clicked)
      }} clicked={clicked} onSubmitEvent={onSubmitEvent} onChangeEvent={onChangeEvent} content={content} setContent={setContent}/>
      <NoteDivCompilation notes={notes}/>
    </>
  )
}

export default App
