import React from 'react'
import {enviarMail} from "../helpers/enviarMail"

export const Footer = () => {
    return (
        <footer className='animate__animated animate__backInDown'>
            <p>Tiago Ramirez</p>
            <button onClick={()=>enviarMail("tirama2001@gmail.com")}>Contactame</button>
        </footer>
    )
}
