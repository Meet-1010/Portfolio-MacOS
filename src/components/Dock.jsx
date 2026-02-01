import React from 'react'
import './dock.scss'
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const Dock = ({windowState, setWindowState}) => {


  return (
    <footer className='dock'>
        <div className="icon">
            <img src='/src/assets/finder.png' className='icon2 finder' alt="" />
        </div>
        <div 
        onClick={() => {setWindowState(state => ({...state, github: true})) }}
        className="icon">
            <img src='/src/assets/github.png' className='icon2 github' alt="" />
        </div>
        <div 
        onClick={() => {setWindowState(state => ({...state, note: true})) }}
        className="icon">
            <img src='/src/assets/notes.png' className='icon2 note' alt="" />
        </div>
        <div 
        onClick={() => {setWindowState(state => ({...state, resume: true})) }}
        className="icon">
            <img src='/src/assets/pdf.png' className='icon2 pdf iconlink' alt="" />
        </div>
        <div
        onClick={() => {window.open("https://calendar.google.com/", "_blank")}}
        className="icon">
            <img src='/src/assets/calendar.png' className='icon2 calender' alt="" />
        </div>
        <div 
        onClick={() => {setWindowState(state => ({...state, spotify: true})) }}
        className="icon">
            <img src='/src/assets/spotify.png' className='icon2 spotify iconspotify' alt="" />
        </div>
        <div 
        onClick={()=>{window.open("mailto:meetsc04@gmail.com", "_blank")}}
        className="icon">
            <img src='/src/assets/mail.png' className='icon2 mail' alt="" />
        </div>
        <div 
        onClick={()=>{window.open("https://www.linkedin.com/in/meet-chauhan-5574a4264/", "_blank")}}
        className="icon">
            <img src='/src/assets/link.png' className='icon2 link iconlink' alt="" />
        </div>
        <div 
        onClick={() => {setWindowState(state => ({...state, cli: true})) }}
        className="icon">
            <img src='/src/assets/terminal.png' className='icon2 cli' alt="" />
        </div>
    </footer>
  )
}

export default Dock