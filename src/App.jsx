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
    if(content.trim == ''){
      return;
    } else{
      e.preventDefault()
      setNotes([{
        content,
        id: uuidv4(),
        bgColor: `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`
    }, ...notes])
    setContent('')
    isClicked(false)
    }
  }

  return (
    <>
      <AddComp addIcon={addIcon} isClicked={isClicked} onClickEvent={() => isClicked(!clicked)} clicked={clicked} onSubmitEvent={onSubmitEvent} onChangeEvent={onChangeEvent} content={content} setContent={setContent}/>
      <NoteDivCompilation notes={notes}/>
    </>
  )
}

export default App
