import React from 'react'
import '../styles/alert.css'
import { BsInfoCircle } from 'react-icons/bs'
import { useState } from 'react'

function Alert({err}) {
    const [show, setShow] = useState(false)
    // const [Icon, setIcon] = useState(BsInfoCircle)
    // const [text, setText] = useState("")
    return (
        <div id='formAlert' className={show && "show"} onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
            <BsInfoCircle id='infoIcon'/>
            <p>{err.text}</p>
        </div>
    )
}

export default Alert