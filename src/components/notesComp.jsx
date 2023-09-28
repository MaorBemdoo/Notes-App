/* eslint-disable react/prop-types */
import NoteDiv from './noteComp'

const NoteDivCompilation = ({notes, deleteNote, editNote, edited, setContent}) => {
    return (
        <>
            {notes.map(({content, id, bgColor}) => {
                // console.log(content);
                return <NoteDiv content={content} key={id} bgColor={bgColor} id={id} deleteNote={deleteNote} editNote={editNote} edited={edited} setContent={setContent}/>
            })}
        </>
    )
}

export default NoteDivCompilation