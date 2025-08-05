import React from 'react';
import './Home.css'
import Hero from './component/Hero'
import Motto from './component/Motto'
import Construction from './component/Construction'
import vd1 from '../../assets/trade vd (1).mp4'
import vd2 from '../../assets/trade vd (2).mp4'
import Groups from './component/Groups'
import ContactCard from './component/ContactCard'
import F3 from '../../components/Footer/Footer'
import Roadmap from './component/Roadmap';
import { useNavigate } from 'react-router-dom';
import OverlayFooter from '../../components/OverlayFooter/OverlayFooter';

const Home = () => {
    const navigate = useNavigate()
    const handleNavigate1 = () => {
        navigate('/about')
    }
    const handleNavigate2 = () => {
        navigate('/hospitality')
    }
    
    const constructors = [
        {
            video: vd1,
            title: 'We Creates a New Kind of Architectural Home.',
            description: 'Trade Syndicate specializes in architecturally designed homes, blending innovation with efficient construction. We offer everything from tents to full-builds, ensuring a smooth process, on-time delivery, and no budget overruns.',
            handleClick: handleNavigate1
        },
        {
            video: vd2,
            title: 'Another Vision for Architectural Excellence',
            description: 'Interiors that blend elegance, comfort, and sophistication, creating spaces that are both opulent and inviting. Featuring high-quality materials, bespoke furnishings, and thoughtful layouts, the design emphasizes bold colors, unique textures, and exquisite finishes for a one-of-a-kind ambiance. Balancing aesthetics with functionality, it offers a timeless, indulgent living experience.',
            handleClick: handleNavigate2,
        }
    ];

    return (
        <div className='home'>
            <Hero />
            <Motto />
            {constructors.map((constructor, index) => (
                <Construction key={index} {...constructor} />
            ))}
            <Roadmap />
            <Groups />
            <ContactCard />
            <F3 />
            <OverlayFooter />
        </div>
    )
}

export default Home