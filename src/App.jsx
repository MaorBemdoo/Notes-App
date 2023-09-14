import './styles/App.css'
import addIcon from './assets/add-icon.svg'
import AddComp from './components/addComp';
import NoteDivCompilation from './components/notesComp';
import { useState } from 'react';

function App() {
  const [notes, setNotes] = useState([{content: "Hey bro", id: 1}])

  const addNotes = (e) => {
    console.log(e);
    setNotes([{content: "Hello World", id: 2}])
  }

  return (
    <>
      <AddComp addIcon={addIcon} onClickEvent={addNotes}/>
      <NoteDivCompilation notes={notes}/>
    </>
  )
}

export default App
