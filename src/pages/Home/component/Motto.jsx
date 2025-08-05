import React from 'react'
import '../Home.css'
import bgi from '../../../assets/a (7).jpg'
import { useNavigate } from 'react-router-dom'

const Motto = () => {
    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate('/about')
    }
    return (
        <div className='motto'>
            <img src={bgi} alt="" />
            <div className="motto-label">
                <h2>Let's Build Something Creative Together</h2>
                <p>Trade Syndicate Group, one of India’s largest industrial engineering companies, provides reliable solutions for leaders in heavy industries. Its core business includes manufacturing shelters, skids, high-pressure pumps, and assembling membranes & LPH systems, as well as supplying iron & steel sections, sheets, and cold & hot roll coils sourced directly from rolling and strip mills.</p>
                <button onClick={handleNavigate}>Learn more</button>
            </div>
        </div>
    )
}

export default Motto