/* eslint-disable react/prop-types */
import { useState } from 'react'
import NoteDiv from './noteComp'

const NoteDivCompilation = () => {
    const [notes, setNotes] = useState([])
    return (
        <>
            {notes.map(({content, id}) => {
                // console.log(content);
                return <NoteDiv content={content} key={id} />
            })}
        </>
    )
}

export default NoteDivCompilation