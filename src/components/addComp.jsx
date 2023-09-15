/* eslint-disable react/prop-types */
import '../styles/addComp.css'

const AddComp = ({addIcon, onClickEvent, clicked}) => {
    return (
        clicked ? (
            <div>
                Hey
            </div>
        ) : (
            <div id="addDiv" onClick={onClickEvent}>
                <img src={addIcon} />
            </div>
        )
    )
}

export default AddComp
