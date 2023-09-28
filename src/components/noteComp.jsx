/* eslint-disable react/prop-types */
import '../styles/noteComp.css'
import menuIcon from '../assets/menu-icon.svg'
import sendIcon from '../assets/send-icon.svg'
import submitIcon from '../assets/submit-icon.svg'
import backIcon from '../assets/back-icon.svg'
import { BsTrash3 } from "react-icons/bs";
import { BsPencilSquare } from "react-icons/bs";
import { useState } from 'react';

const NoteDiv = ({content, bgColor, id, deleteNote, propDrilledSubmitHandler}) => {
    const [{first, second}, setMenuClicked] = useState({
        first: false,
        second: false
    })
    const [editedContent, setEditedContent] = useState(content)
    const [edited, isEdited] = useState(false)

    const formNoteSubmit = (e) => {
        e.preventDefault()
        isEdited(false)
        setMenuClicked({
            first: false,
            second: false
        })
        if (editedContent.trim() == "") {
            deleteNote(id)
        } else{
            propDrilledSubmitHandler(id, editedContent)
        }
    }

    // const editNote = () => {
    //     isEdited(!edited)
    // }

    return (
        edited ? 
            <form className="formNote" method='post' onSubmit={formNoteSubmit}>
                <textarea style={{backgroundColor: bgColor}} value={editedContent} onChange={(e) => setEditedContent(e.target.value)}></textarea>
                <img src={backIcon} alt='back' onClick={() => {
                    isEdited(false)
                    setEditedContent(content)
                    setMenuClicked({
                        first: false,
                        second: false
                    })
                }}/>
                <button><img src={submitIcon} alt='submit'/></button>
            </form>
        : 
            <div className='note'>
                <textarea style={{backgroundColor: bgColor}} value={content} disabled></textarea>
                <div>
                    <div className='divMenu' style={{display: !first ? 'none' : 'block'}}>
                        <div>
                            <img src='' alt='delete'/>
                            <p>Delete</p>
                        </div>
                        <div>
                            <img src='' alt='delete'/>
                            <p>Delete</p>
                        </div>
                        <div>
                            <img src='' alt='delete'/>
                            <p>Delete</p>
                        </div>
                    </div>
                    <img src={sendIcon} alt='send' onClick={() => setMenuClicked({first: !first, second})}/>
                </div>
                <div>
                    <div className='divMenu' style={{display: !second ? 'none' : 'block'}}>
                        <div onClick={() => isEdited(!edited)}>
                            <BsPencilSquare style={{color: 'green'}}/>
                            <p>Edit</p>
                        </div>
                        <div onClick={() => deleteNote(id)}>
                            <BsTrash3 style={{color: 'red'}}/>
                            <p>Delete</p>
                        </div>
                    </div>
                    <img src={menuIcon} alt='menu' onClick={() => setMenuClicked({first, second: !second})}/>
                </div>
            </div>
    )
}

export default NoteDiv
