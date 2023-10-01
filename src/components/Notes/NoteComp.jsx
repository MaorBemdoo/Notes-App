/* eslint-disable react/prop-types */
import '../../styles/noteComp.css'
import menuIcon from '../../assets/menu-icon.svg'
import sendIcon from '../../assets/send-icon.svg'
import submitIcon from '../../assets/submit-icon.svg'
import backIcon from '../../assets/back-icon.svg'
import { BsTrash3, BsPencilSquare, BsWhatsapp, BsEnvelopeAt } from "react-icons/bs";
import { useState } from 'react';
import Alert from '../Alert'

const NoteDiv = ({content, bgColor, id, date, deleteNote, propDrilledSubmitHandler, err, setErr}) => {
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
        }
        propDrilledSubmitHandler(id, editedContent, isEdited)
    }

    const inputHandler = (e) => {
        if(e.target.value.trim() == ""){
            document.getElementById("formAlert").style.display = "flex"
            setErr({
                icon: "",
                text: "Edited notes with empty text are automatically deleted"
            })
        } else{
            document.getElementById("formAlert").style.display = "none"
        }
    }

    const whatsappFunc = () => {
        const phoneNum = prompt("Enter your phone number: ")
        const phoneNumRegex = /(\+?\d{1,4}[ -]?)?(\(?\d{1,}\)?[ -]?)?\d{1,}([ -]?\d{1,}){4,}/g
        const phoneNumWhiteSpaceRegex = /[\s\-]+/g
        setMenuClicked({
            first: false,
            second: false
        })
        if(phoneNum == null) return;
        if(!(phoneNumRegex.test(phoneNum))){
            alert("Please type a valid number")
            whatsappFunc()
            return;
        }
        const whatsappLink = document.createElement("a")
        whatsappLink.setAttribute("href", `https://api.whatsapp.com/send?phone=${phoneNum.replace(phoneNumWhiteSpaceRegex, '')}&text=${encodeURIComponent(content)}`)
        whatsappLink.setAttribute("rel", "noopener noreferrer")
        whatsappLink.setAttribute("target", "_blank")
        whatsappLink.click()
    }

    // document.addEventListener("keydown", (e) => {
    //     if (e.ctrlKey && e.key == "Enter") {
    //         formNoteSubmit(e);
    //     }
    // });

    // const editNote = () => {
    //     isEdited(!edited)
    // }

    return (
        edited ? 
            <form className="formNote" method='post' onSubmit={formNoteSubmit}>
                <Alert err={err}/>
                <textarea style={{backgroundColor: bgColor}} value={editedContent} onFocus={() => document.getElementById("formAlert").style.display = "none"} onInput={inputHandler} onChange={(e) => setEditedContent(e.target.value)}></textarea>
                <img src={backIcon} alt='back' title='Back' onClick={() => {
                    isEdited(false)
                    setEditedContent(content)
                    setMenuClicked({
                        first: false,
                        second: false
                    })
                }}/>
                <button><img src={submitIcon} alt='submit' title='Edit'/></button>
            </form>
        : 
            <div className='note'>
                <textarea style={{backgroundColor: bgColor}} value={content} disabled></textarea>
                <div>
                    <div className="divMenu" id={first ? 'showDM' : ''}>
                        <div>
                            <BsEnvelopeAt style={{fontSize: "1.2rem"}}/>
                            <p>Email</p>
                        </div>
                        <div onClick={whatsappFunc}>
                            <BsWhatsapp style={{fontSize: "1.2rem", color: "green", minInlineSize: "fit-content"}}/>
                            <p>Whatsapp</p>
                        </div>
                    </div>
                    <img src={sendIcon} alt='send' onClick={() => setMenuClicked({first: !first, second})}/>
                </div>
                <p>{date}</p>
                <div>
                    <div className="divMenu" id={second ? 'showDM' : ''}>
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
