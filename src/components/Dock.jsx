import React from 'react'
import './dock.scss'
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import githubpng from "../assets/github.png"
import finderpng from "../assets/finder.png"
import linkpng from "../assets/link.png"
import notepng from "../assets/notes.png"
import calendarpng from "../assets/calendar.png"
import pdfpng from "../assets/pdf.png"
import spotifypng from "../assets/spotify.png"
import terminalpng from "../assets/terminal.png"
import mailpng from "../assets/mail.png"

const Dock = ({windowState, setWindowState}) => {


  return (
    <footer className='dock'>
        <div 
        onClick={() => {setWindowState(state => ({...state, welcome: true})) }}
        className="icon">
            <img src={finderpng} className='icon2 finder welcome' alt="" />
        </div>
        <div 
        onClick={() => {setWindowState(state => ({...state, github: true})) }}
        className="icon">
            <img src={githubpng} className='icon2 github' alt="" />
        </div>
        <div 
        onClick={() => {setWindowState(state => ({...state, note: true})) }}
        className="icon">
            <img src={notepng} className='icon2 note' alt="" />
        </div>
        <div 
        onClick={() => {setWindowState(state => ({...state, resume: true})) }}
        className="icon">
            <img src={pdfpng} className='icon2 pdf iconlink' alt="" />
        </div>
        <div
        onClick={() => {window.open("https://calendar.google.com/", "_blank")}}
        className="icon">
            <img src={calendarpng} className='icon2 calender' alt="" />
        </div>
        <div 
        onClick={() => {setWindowState(state => ({...state, spotify: true})) }}
        className="icon">
            <img src={spotifypng} className='icon2 spotify iconspotify' alt="" />
        </div>
        <div 
        onClick={()=>{window.open("mailto:meetsc04@gmail.com", "_blank")}}
        className="icon">
            <img src={mailpng} className='icon2 mail' alt="" />
        </div>
        <div 
        onClick={()=>{window.open("https://www.linkedin.com/in/meet-chauhan-5574a4264/", "_blank")}}
        className="icon">
            <img src={linkpng} className='icon2 link iconlink' alt="" />
        </div>
        <div 
        onClick={() => {setWindowState(state => ({...state, cli: true})) }}
        className="icon">
            <img src={terminalpng} className='icon2 cli' alt="" />
        </div>
    </footer>
  )
}

export default Dock