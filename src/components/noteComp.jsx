/* eslint-disable react/prop-types */
import '../styles/noteComp.css'
import menuIcon from '../assets/menu-icon.svg'
import sendIcon from '../assets/send-icon.svg'

const NoteDiv = ({content, bgColor}) => {
    return (
        <div className='note'>
            <textarea style={{backgroundColor: bgColor}} disabled>{content}</textarea>
            <div>
                <img src={sendIcon} alt='send'/>
            </div>

            <div>
                <img src={menuIcon} alt='menu icon'/>
            </div>
        </div>
    )
}

export default NoteDiv
