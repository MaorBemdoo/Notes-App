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
    setNotes([{
      content,
      id: uuidv4()
  }])
  }

  return (
    <>
      <AddComp addIcon={addIcon} onClickEvent={() => isClicked(!clicked)} clicked={clicked} onSubmitEvent={onSubmitEvent} onChangeEvent={onChangeEvent} content={content}/>
      <NoteDivCompilation notes={notes}/>
    </>
  )
}

export default App
