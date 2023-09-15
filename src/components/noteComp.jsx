/* eslint-disable react/prop-types */
import '../styles/noteComp.css'
import menuIcon from '../assets/menu-icon.svg'

const NoteDiv = ({content, bgColor}) => {
    return (
        <div className='note'>
            <textarea style={{backgroundColor: bgColor}} disabled>{content}</textarea>
            <div>
                <img src={menuIcon} alt='menu icon'/>
            </div>
        </div>
    )
}

export default NoteDiv
