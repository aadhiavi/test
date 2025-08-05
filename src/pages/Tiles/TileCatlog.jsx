import React from "react";
import './Tiles.css';
import NavbarTest from "../../components/navbar/NavbarTest";
import F3 from "../../components/Footer/Footer";
import ContactCard from "../Home/component/ContactCard";

const TileCatalog = ({ data }) => {
    const { why_customers_choose_us, title, tagline, overview, featured_collections, tiles_catalog, Img } = data;

    return (
        <div>
            <div className="catlogs">
                <div className='tile-nav'>
                    <NavbarTest />
                </div>
                <h1>{title}</h1>
                <div className="main-image">
                    <img src={Img} alt="" />
                </div>
                <h3>{tagline}</h3>
                <div className="catlog-tile-intro">
                    <h4>Introduction</h4>
                    <p>{overview}</p>
                </div>

                {why_customers_choose_us ? (
                    <div className="catlog-tile-intro">
                        <h4>Why Customers Choose Us</h4>
                        <ul>
                            <li>{why_customers_choose_us.luxury}</li>
                            <li>{why_customers_choose_us.trust}</li>
                            <li>{why_customers_choose_us.durability}</li>
                            <li>{why_customers_choose_us.style}</li>
                        </ul>
                    </div>
                ) : ''}

                <section className="catlog-tile-intro1">
                    <h4>Featured Collections</h4>
                    {
                        featured_collections.map((item, idx) => (
                            <div className="featured-tile" key={idx}>
                                {
                                    idx % 2 === 0 ? (
                                        <>
                                            <div>
                                                <p><strong>{item.tile_code}</strong></p>
                                                <ul>
                                                    {
                                                        item.application.map((item, i) => (
                                                            <li key={i}>{item}</li>
                                                        ))
                                                    }
                                                </ul>
                                            </div>
                                            <img src={item.image} alt="" />
                                        </>
                                    ) : (
                                        <>
                                            <img src={item.image} alt="" />
                                            <div>
                                                <p><strong>{item.tile_code}</strong></p>
                                                <ul>
                                                    {
                                                        item.application.map((item, i) => (
                                                            <li key={i}>{item}</li>
                                                        ))
                                                    }
                                                </ul>
                                            </div>
                                        </>
                                    )
                                }
                            </div>
                        ))
                    }
                </section>
                <section className="catlog-tile-intro">
                    <h4>Full Catalog</h4>
                    <ul>
                        {
                            tiles_catalog.map((item, idx) => (
                                <li key={idx}><span>{item.tile_code} </span>, {item.description}</li>
                            ))
                        }
                    </ul>
                </section>
            </div>
            <ContactCard />
            <F3 />
        </div>
    );
};

export default TileCatalog;
