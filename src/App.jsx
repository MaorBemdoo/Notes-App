import './styles/App.css'
import addIcon from './assets/add-icon.svg'
import AddComp from './components/addComp';
import NoteDivCompilation from './components/notesComp';

function App() {

  return (
    <>
      <AddComp addIcon={addIcon}/>
      <NoteDivCompilation />
    </>
  )
}

export default App
