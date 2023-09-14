/* eslint-disable react/prop-types */
import '../styles/noteComp.css'

const NoteDiv = ({content}) => {
    return (
        <div className='note'>
            <p>{content}</p>
        </div>
    )
}

export default NoteDiv
