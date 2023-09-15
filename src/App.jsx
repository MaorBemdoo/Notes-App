import './styles/App.css'
import addIcon from './assets/add-icon.svg'
import AddComp from './components/addComp';
import NoteDivCompilation from './components/notesComp';
import { useState } from 'react';

function App() {
  const [notes, setNotes] = useState([{content: "Hey bro", id: 1}])
  const [clicked, isClicked] = useState(false)

  const onSubmitEvent = (e) => {
    e.preventDefault()
  }

  const addNotes = () => {
    isClicked(!clicked)
    setNotes([{content: "Hello Men"}, ...notes])
  }

  return (
    <>
      <AddComp addIcon={addIcon} onClickEvent={addNotes} clicked={clicked} onSubmitEvent={onSubmitEvent}/>
      <NoteDivCompilation notes={notes}/>
    </>
  )
}

export default App
