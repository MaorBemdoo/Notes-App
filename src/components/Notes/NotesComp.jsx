/* eslint-disable react/prop-types */
import NoteDiv from "./NoteComp";

const NoteDivCompilation = ({
  notes,
  deleteNote,
  edited,
  propDrilledSubmitHandler,
  err
}) => {
  return (
    <>
      {notes.map(({ content, id, bgColor }) => {
        // console.log(content);
        return (
          <NoteDiv
            content={content}
            key={id}
            bgColor={bgColor}
            id={id}
            deleteNote={deleteNote}
            edited={edited}
            propDrilledSubmitHandler={propDrilledSubmitHandler}
            err={err}
          />
        );
      })}
    </>
  );
};

export default NoteDivCompilation;
