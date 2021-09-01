import React from 'react'
import { useScroll } from '../contexts/ScrollContext'

const Services = () => {
    const scroll = useScroll();

    return (
        <>
            <section className="services">
                <h2>Services</h2>
                <div className="description">
                    <div className="service-section inspection">
                        <div className="info">
                            <h3>RV Inspection</h3>
                            <p>I inspect RVs, providing insight into how the RVs are currently feeling. I think I’m a bit of an RV therapist myself.</p>
                        </div>
                        <img src="https://picsum.photos/500/600" alt="Inspection Image" style={{objectPosition: `0 ${scroll / 2 - 300}px`}}/>
                    </div>
                    <div className="service-section repair">
                        <div className="info">
                            <h3>AC Repair</h3>
                            <p>I can repair air conditioning units, unless they are running, in which case I’ll die from electrical shock. But anyways, I can still do it!</p>
                        </div>
                        <img src="https://picsum.photos/500/601" alt="Repair Image" style={{objectPosition: `0 ${scroll / 2 - 300}px`}}/>
                    </div>
                </div>
            </section>
            <div className="triangle-container">
                <div className="triangle-down"></div>
            </div>
        </>
    )
}

export default Services
