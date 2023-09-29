import React from 'react'
import '../styles/alert.css'
import { BsInfoCircle } from 'react-icons/bs'
import { useState } from 'react'

function Alert() {
    const [show, setShow] = useState(false)

    return (
        <div id='formAlert' className={show && "show"}>
            <BsInfoCircle id='infoIcon' onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, alias.</p>
        </div>
    )
}

export default Alert