/* eslint-disable react/prop-types */
import '../styles/addComp.css'
import submitIcon from '../assets/submit-icon.svg'
import backIcon from '../assets/back-icon.svg'

const AddComp = ({addIcon, onClickEvent, clicked, isClicked, onSubmitEvent, onChangeEvent, content, setContent}) => {
    document.addEventListener("keydown", (e) => {
        if (e.ctrlKey && e.key == "Enter") {
            onSubmitEvent(e);
        }
    });
    return (
        clicked ? (
            <form method="post" id='addForm' onSubmit={onSubmitEvent}>
                <textarea placeholder='Type a note' onChange={onChangeEvent} value={content} autoFocus id='textA'></textarea>
                <img src={backIcon} alt='back' onClick={() => {
                    isClicked(false)
                    setContent('')
                    }}/>
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
