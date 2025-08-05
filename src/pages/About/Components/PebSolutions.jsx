import React from 'react'
import '../About.css';
import { Solutions } from '../../../components/ImageStore/ImageStore';

const PebSolutions = () => {
    return (
        <div className='prefab'>
            <div className="advantages-list">
                <h2>PEB Solutions for Modern Construction</h2>
                <p>We use essential components in PEBs building construction for stability and efficiency. These include structural supports that prevent deformation, materials that improve thermal insulation, and specialized profiles for securing the roof. Ventilation elements promote airflow, while cladding materials protect against weather. Steel framing provides overall strength, and fittings ensure secure assembly. Additionally, clear panels allow natural light, enhancing interior illumination.</p>
            </div>
            <div className="prefab-container">
                <div className="solution-gallery-grid">
                    {
                        Solutions.map((item, index) => (
                            <div key={index} className="grid-solution">
                                <img className='solute-img' src={item.img} alt="item" />
                                <h3>{item.title}</h3>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default PebSolutions
