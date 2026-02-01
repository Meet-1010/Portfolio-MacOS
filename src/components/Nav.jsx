import React from 'react'
import "./nav.scss"
import DateTime from './DateTime'
import applesvg from "../assets/apple.svg"
import wifisvg from "../assets/wifi.svg"

const Nav = ({windowState, setWindowState}) => {
  return (
    <nav>
        <div className='left'>
            <div className="apple-icon">
                <img src={applesvg} className='appleicon' alt="" />
            </div>

            <div className="nav-item">
                <p>Meet Chauhan</p>
            </div>

            <div className="nav-item">
                <p>File</p>
            </div>

            <div className="nav-item">
                <p>Window</p>
            </div>

            <div className="nav-item terminal">
                <p
                onClick={() => {setWindowState(state => ({...state, cli: true})) }}
                >Terminal</p>
            </div>

        </div>
        <div className="right">
            <div className="nav-icon">
                <img src={wifisvg} className='wifiicon' alt="" />
            </div>

            <div className="nav-item">
                <DateTime />
            </div>
        </div>
    </nav>
  )
}

export default Nav