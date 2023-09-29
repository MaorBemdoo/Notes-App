import "./styles/App.css";
import addIcon from "./assets/add-icon.svg";
import AddComp from "./components/AddComp";
import NoteDivCompilation from "./components/Notes/NotesComp";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Loading from "./components/Loading";

function App() {
  const [content, setContent] = useState("");
  const [notes, setNotes] = useState(() => {
    const storedNotes = localStorage.getItem("notes");
    return storedNotes ? JSON.parse(storedNotes) : [];
  });

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const [clicked, isClicked] = useState(false);
  const [loading, isLoading] = useState(true);
  const [err, setErr] = useState({
    icon: "",
    text: ""
  })
  // const [edited, isEdited] = useState(false)

  const onChangeEvent = (e) => {
    setContent(e.target.value);
  };

  const onSubmitEvent = (e) => {
    e.preventDefault();
    document.getElementById("formAlert").style.display = "flex"
    for (const note of notes) {
      if (note.content.trim().toLowerCase() == content.trim().toLowerCase()) {
        setErr({icon: "", text: "There is already a note with this content"})
        return;
      }
    }
    if (content.trim() == "") {
      setErr({icon: "", text: "You cannot add an empty note. Please type a note"})
      return;
    } else {
      setContent("");
      isClicked(false);
      setNotes([
        {
          content,
          id: uuidv4(),
          bgColor: `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
            Math.random() * 256
          )}, ${Math.floor(Math.random() * 256)})`,
        },
        ...notes,
      ]);
    }
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  const propDrilledSubmitHandler = (editingId, editedContent, isEdited) => {
    for (const note of notes) {
      if (note.content.toLowerCase() == editedContent.toLowerCase() && note.id !== editingId) {
        isEdited(true)
        return;
      }
    }
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === editingId ? { ...note, content: editedContent } : note
      )
    );
  };

  window.onload = () => {
    isLoading(false);
  };

  return loading ? (
    <Loading notes={notes} />
  ) : (
    <>
      <AddComp
        addIcon={addIcon}
        isClicked={isClicked}
        onClickEvent={() => {
          isClicked(!clicked);
        }}
        clicked={clicked}
        onSubmitEvent={onSubmitEvent}
        onChangeEvent={onChangeEvent}
        content={content}
        setContent={setContent}
        err={err}
      />
      <NoteDivCompilation
        notes={notes}
        deleteNote={deleteNote}
        propDrilledSubmitHandler={propDrilledSubmitHandler}
      />
    </>
  );
}

export default App;
