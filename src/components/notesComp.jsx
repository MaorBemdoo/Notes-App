/* eslint-disable react/prop-types */
import NoteDiv from './noteComp'

const NoteDivCompilation = ({notes, deleteNote, edited, propDrilledSubmitHandler}) => {
    if(localStorage.getItem("noteStore") !== null){
        return (
            <>
                {JSON.parse(localStorage.getItem("noteStore")).map(({content, id, bgColor}) => {
                    // console.log(content);
                    return <NoteDiv content={content} key={id} bgColor={bgColor} id={id} deleteNote={deleteNote} edited={edited} propDrilledSubmitHandler={propDrilledSubmitHandler}/>
                })}
            </>
        )
    }
    else{
        localStorage.setItem("noteStore", "[]")
    }
}

export default NoteDivCompilation