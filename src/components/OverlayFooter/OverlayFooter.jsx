import React, { useState } from 'react'
import './OverlayFooter.css'
import { CiCompass1 } from 'react-icons/ci'
import Overlay from '../Overlay/Overlay'
import { useNavigate } from 'react-router-dom'

const OverlayFooter = () => {
    const [open, setOpen] = useState(false)
    const navigate = useNavigate()
    const handleGallery = () => {
        navigate('/gallery')
    }

    const handleClick = () => {
        setOpen(!open)
    }
    const handleBack = () => {
        setOpen(false)
    }

    return (
        <>
            <div className='overlay-footer'>
                <div className="overlay-footer-box">
                    <a className='call-link' href="tel:+914048507745">Call</a>
                </div>
                <div className="overlay-footer-box1">
                    <div onClick={handleClick} className="overlay-footer-btn">
                    <p>N</p>
                        <CiCompass1 className={open ? 'overlay-footer-btn-icon action' : 'overlay-footer-btn-icon'} color='white' size={29} />
                    </div>
                </div>
                <div className="overlay-footer-box" onClick={handleGallery}>
                    Gallery
                </div>
            </div>
            {open && <Overlay handleBack={handleBack}/>}
        </>
    )
}

export default OverlayFooter;