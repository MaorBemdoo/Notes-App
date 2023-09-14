/* eslint-disable react/prop-types */
import '../styles/addComp.css'

const AddComp = ({addIcon, onClickEvent}) => {
    return (
        <div id="addDiv" onClick={onClickEvent}>
            <img src={addIcon} />
        </div>
    )
}

export default AddComp
