/* eslint-disable react/prop-types */
import '../styles/noteComp.css'

const NoteDiv = ({content, bgColor}) => {
    return (
        <div className='note' style={{backgroundColor: bgColor}}>
            <p>{content}</p>
        </div>
    )
}

export default NoteDiv
