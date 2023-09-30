/* eslint-disable react/prop-types */
import NoteDiv from "./NoteComp";

const NoteDivCompilation = ({
  notes,
  deleteNote,
  edited,
  propDrilledSubmitHandler,
  err,
  setErr
}) => {
  return (
    <>
      {notes.map(({ content, id, bgColor, date}) => {
        // console.log(content);
        return (
          <NoteDiv
            content={content}
            key={id}
            bgColor={bgColor}
            date={date}
            id={id}
            deleteNote={deleteNote}
            edited={edited}
            propDrilledSubmitHandler={propDrilledSubmitHandler}
            err={err}
            setErr={setErr}
          />
        );
      })}
    </>
  );
};

export default NoteDivCompilation;
