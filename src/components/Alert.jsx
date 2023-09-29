import React from 'react'
import '../styles/alert.css'
import { BsInfoCircle } from 'react-icons/bs'
import { useState } from 'react'

function Alert() {
    const [show, setShow] = useState(false)
    const [Icon, setIcon] = useState(BsInfoCircle)
    const [text, setText] = useState("")

    return (
        <div id='formAlert' className={show && "show"}>
            {/* <Icon id='infoIcon' onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}/> */}
            <p>{text}</p>
        </div>
    )
}

export default Alert