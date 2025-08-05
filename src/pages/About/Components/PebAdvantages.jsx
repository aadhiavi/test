import React from 'react'
import '../About.css';
import { Houses } from '../../../components/ImageStore/ImageStore';

const PebAdvantages = () => {
    return (
        <div className='prefab'>
            <div className="advantages-list">
                <h2>Applications of Pre Engineered Buildings (PEBs)</h2>
                <ul>
                    <li><strong>Warehouses:</strong> Ideal for storage facilities, PEBs provide large, open spaces with quick construction and minimal maintenance.</li>
                    <li><strong>Factories:</strong> Perfect for industrial manufacturing units due to their flexibility in design and structural efficiency.</li>
                    <li><strong>Cold Storages:</strong> Used for temperature-sensitive goods, offering quick setup and energy efficiency.</li>
                    <li><strong>Offices:</strong> Modern, customizable office spaces with fast construction times.</li>
                    <li><strong>Schools:</strong> Quick-build educational facilities with durable, functional designs.</li>
                    <li><strong>Hospitals:</strong> PEBs are increasingly used for healthcare buildings, offering quick deployment and cost-effectiveness.</li>
                    <li><strong>Site Offices:</strong> Temporary or permanent site offices for construction or project management teams.</li>
                    <li><strong>Gas Stations: </strong>Used for fuel station structures with a high degree of customization.</li>
                    <li><strong>Bus Shelters: </strong>Cost-effective, durable shelters designed for public transport stations.</li>
                    <li><strong>Car Parks: </strong>Multi-story or open parking solutions using pre-engineered designs for quick assembly.</li>
                    <li><strong>Commercial Complexes:</strong> Ideal for retail or mixed-use developments due to speed and flexibility.</li>
                    <li><strong>Shopping Malls:</strong> Large, open spaces that can be rapidly constructed for retail purposes.</li>
                    <li><strong>Aircraft Hangers:</strong> Large-scale, open structures for storing and maintaining aircraft.</li>
                    <li><strong>Sports & Recreational Facilities:</strong> Includes stadiums, gyms, swimming pools, and other community sports facilities.</li>
                </ul>
            </div>
            <div className="prefab-container">
                <div className="house-gallery-grid">
                    {
                        Houses.map((item, index) => (
                            <div key={index} className="grid-house">
                                <img src={item} alt="item" />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default PebAdvantages