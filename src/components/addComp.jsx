/* eslint-disable react/prop-types */
import '../styles/addComp.css'
import submitIcon from '../assets/submit-icon.svg'

const AddComp = ({addIcon, onClickEvent, clicked, isClicked, onSubmitEvent, onChangeEvent, content}) => {
    return (
        clicked ? (
            <form method="post" id='addForm' onSubmit={onSubmitEvent}>
                <textarea onChange={onChangeEvent} value={content}></textarea>
                <button><img src={} alt='back'/></button>
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
