import React from 'react'
import '../About.css';
import { prefabs } from '../../../components/ImageStore/ImageStore';

const Prefabs = () => {
    return (
        <div  className='prefab' >
            <div className="advantages-list">
                <h2>Advantages of Pre Engineered Buildings (PEBs)</h2>
                <ul>
                    <li>Single Source Responsibility: Simplifies project management by having one point of contact for design, procurement, and installation.</li>
                    <li>Faster Installation: Speeds up the construction process, reducing overall project timelines.</li>
                    <li>Economical: Cost-effective solutions that reduce both initial and long-term expenses.</li>
                    <li>Maintenance-Free: Low-maintenance design that minimizes ongoing costs and effort.</li>
                    <li>Clear Spans Up to 90m: Provides wide open spaces without the need for support columns, offering flexibility in design.</li>
                    <li>Flexibility in Expansion: Easy to expand or modify the structure in the future as needs change.</li>
                    <li>Energy Efficient: Helps reduce energy consumption through optimized materials and design features.</li>
                    <li>Earthquake Resistant: Built to withstand seismic forces, ensuring safety in earthquake-prone areas.</li>
                </ul>
            </div>
            <div className="prefab-container">
                <h2>Types of Pre Engineered Buildings (PEBs)</h2>
                <div className="prefab-gallery-grid">
                    {
                        prefabs.map((item, index) => (
                            <div key={index} className="prefab-gallery-item">
                                <img src={item.img} alt="item" />
                                <h3>{item.title}</h3>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Prefabs;