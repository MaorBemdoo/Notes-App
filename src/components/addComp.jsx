/* eslint-disable react/prop-types */
import '../styles/addComp.css'

const AddComp = ({addIcon, onClickEvent, clicked}) => {
    return (
        clicked ? (
            <form method="post" id='addForm'>
                <input type='text'/>            
            </form>
        ) : (
            <div id="addDiv" onClick={onClickEvent}>
                <img src={addIcon} />
            </div>
        )
    )
}

export default AddComp
