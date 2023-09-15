import './styles/App.css'
import addIcon from './assets/add-icon.svg'
import AddComp from './components/addComp';
import NoteDivCompilation from './components/notesComp';
import { useState } from 'react';

function App() {
  const [content, setContent] = useState('')
  const [notes, setNotes] = useState([])
  const [clicked, isClicked] = useState(false)

  const onChangeEvent = (e) => {
    setContent(e.target.value)
  }

  const onSubmitEvent = (e) => {
    e.preventDefault()
    setNotes([{content: "Hello Men"}, ...notes])
  }

  return (
    <>
      <AddComp addIcon={addIcon} onClickEvent={() => isClicked(!clicked)} clicked={clicked} onSubmitEvent={onSubmitEvent} onChangeEvent={onChangeEvent} content={content}/>
      <NoteDivCompilation notes={notes}/>
    </>
  )
}

export default App
