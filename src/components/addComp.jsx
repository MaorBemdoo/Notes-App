/* eslint-disable react/prop-types */
import '../styles/addComp.css'
import submitIcon from '../assets/submit-icon.svg'

const AddComp = ({addIcon, onClickEvent, clicked}) => {
    return (
        clicked ? (
            <form method="post" id='addForm'>
                <textarea></textarea>
                <button role='submit'><img src={submitIcon} alt='submit'/></button>
            </form>
        ) : (
            <div id="addDiv" onClick={onClickEvent}>
                <img src={addIcon} />
            </div>
        )
    )
}

export default AddComp
