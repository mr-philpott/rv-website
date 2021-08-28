import React from 'react'

const Services = () => {
    return (
        <section className="services">
            <h3>Serivces</h3>
            <div className="options">
                <div className="inspection">
                    <h4>Inspection</h4>
                    <div className="content">
                        <div className="image">
                            <img src="https://picsum.photos/600/400" alt="Inspection Image" />
                        </div>
                        <p>Pellentesque hendrerit odio quis magna molestie, ac pretium nisl consequat. Duis non urna aliquet, ultricies lectus et, mollis arcu. Nam mauris libero, dictum nec nibh id, fermentum semper purus. Aliquam lacus turpis, pellentesque nec vestibulum eu, maximus at ligula. Cras pretium.</p>
                    </div>
                </div>
                <div className="repair">
                    <h4>Repair</h4>
                    <div className="content">
                        <p>Pellentesque hendrerit odio quis magna molestie, ac pretium nisl consequat. Duis non urna aliquet, ultricies lectus et, mollis arcu. Nam mauris libero, dictum nec nibh id, fermentum semper purus. Aliquam lacus turpis, pellentesque nec vestibulum eu, maximus at ligula. Cras pretium.</p>
                        <div className="image">
                            <img src="https://picsum.photos/600/401" alt="Repair Image" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services
