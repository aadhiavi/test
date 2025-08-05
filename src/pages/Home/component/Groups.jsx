import React from 'react'
import { Link } from 'react-router-dom'
import { Group } from '../../../components/ImageStore/ImageStore'
import { BsArrowRightCircle } from 'react-icons/bs'

const Groups = () => {

    return (
        <div className='group-main-container'>
            <div className="group-list">
                <h2>Our Group of Companies</h2>
                <div className="group-grid">
                   {Group.map((item,index)=>(
                    <Link key={index} to={item.link}>
                    <div className="group-list-item">
                        <img src={item.pic} alt="" />
                        <Link to={item.link}><h3>{item.line1}</h3></Link>
                        <p>{item.line2}</p>
                        <Link className='site-link' to={item.link}>Visit website <BsArrowRightCircle /></Link>
                    </div>
                    </Link>
                   ))}
                </div>
            </div>
        </div>
    )
}

export default Groups