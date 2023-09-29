import React from 'react'
import '../styles/alert.css'
import { BsInfoCircle } from 'react-icons/bs'
import { useState } from 'react'

function Alert({err}) {
    const [show, setShow] = useState(false)
    // const [Icon, setIcon] = useState(BsInfoCircle)
    // const [text, setText] = useState("")
    document.addEventListener("submit", () => {
        document.getElementById("formAlert").style.display = "flex"
    })
    return (
        <div id='formAlert' className={show && "show"}>
            <BsInfoCircle id='infoIcon' onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}/>
            <p>{err.text}</p>
        </div>
    )
}

export default Alert