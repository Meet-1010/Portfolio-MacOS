import React from 'react'
import MacWindow from './MacWindow'
import "./finder.scss"
import workpng from "../../assets/briefcase.png";
import profilephoto from "../../../public/Profile_photo.jpg"

const Finder = ({ windowName, setWindowState }) => {
  return (
    <MacWindow windowName={windowName} setWindowState={setWindowState}>
        <div className='finder-window'>
            <div className="right">
                <div className='imgdiv'>
                    <img src={profilephoto} className='profile' alt="" />
                </div>
                <h1 className='name'>Hi, I'm Meet</h1>
                <h3>I'm the creator of macOS Web Portfolio, which you're on right now😉</h3> 
                <p>
                    I am a fullstack web developer, with an infinite amount of love for frontend web development, esp JavaScript, TypeScript, and for frontend frameworks like Vue and React🤩
                </p>
                <p>
                    However, my love for tech doesn't end there. I enjoy writing backend APIs, scripts, working with databases, and my fav platform is NodeJS
                </p>
            </div>
        </div>
    </MacWindow>
  )
}

export default Finder