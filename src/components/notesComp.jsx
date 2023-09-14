/* eslint-disable react/prop-types */
import NoteDiv from './noteComp'

const NoteDivCompilation = () => {
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