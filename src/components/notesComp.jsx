/* eslint-disable react/prop-types */
import {notes} from '../notes'

const NoteDivCompilation = () => {
    return (
        <>
            {notes.map(({content, id}) => {
                console.log(content);
                return <NoteDiv content={content} key={id} />
            })}
        </>
    )
}

const NoteDiv = ({content}) => {
    return (
        <div>
            {content}
        </div>
    )
}

export default NoteDivCompilation