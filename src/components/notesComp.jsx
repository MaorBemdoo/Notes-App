/* eslint-disable react/prop-types */
import NoteDiv from './noteComp'

const NoteDivCompilation = ({notes}) => {
    return (
        <>
            {notes.map(({content, id, bgColor}) => {
                // console.log(content);
                return <NoteDiv content={content} key={id} bgColor={bgColor}/>
            })}
        </>
    )
}

export default NoteDivCompilation