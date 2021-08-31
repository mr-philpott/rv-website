import React from 'react'

const Gallery = () => {
    return (
        <section className="photos">
            <h3>Gallery</h3>

            <div className="gallery-grid">
                <div className="row">
                    <img src="https://picsum.photos/840/500" alt="example" id="img-big1square"/>
                    <img src="https://picsum.photos/550/500" alt="example" id="img-square1"/>
                </div>
                <div className="row">
                    <img src="https://picsum.photos/1400/700" alt="example" id="img-long"/>
                </div>
                <div className="row">
                    <img src="https://picsum.photos/840/500" alt="example" id="img-big2square"/>
                    <img src="https://picsum.photos/550/500" alt="example" id="img-square2"/>
                </div>
            </div>
        </section>
    )
}

export default Gallery
