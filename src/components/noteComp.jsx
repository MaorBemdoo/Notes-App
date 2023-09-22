/* eslint-disable react/prop-types */
import '../styles/noteComp.css'
import menuIcon from '../assets/menu-icon.svg'
import sendIcon from '../assets/send-icon.svg'
import { BsTrash3 } from "react-icons/bs";
import { BsPencilSquare } from "react-icons/bs";
import { useState } from 'react';

const NoteDiv = ({content, bgColor, id, deleteNote, editNote, edited}) => {
    const [{first, second}, setMenuClicked] = useState({
        first: false,
        second: false
    })

    return (
        <div className='note'>
            <textarea style={{backgroundColor: bgColor}} value={content} disabled={!edited}></textarea>
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
                    <div onClick={editNote}>
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
