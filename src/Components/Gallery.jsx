import React from 'react'

const Gallery = () => {
    return (
        <section className="photos">
            <h3>Gallery</h3>

            <div className="gallery-grid">
                <img src="https://picsum.photos/725/400" alt="example" id="img-bigsquare"/>
                <img src="https://picsum.photos/550/400" alt="example" id="img-square1"/>
                <img src="https://picsum.photos/550/400" alt="example" id="img-square2"/>
                <img src="https://picsum.photos/1900/600" alt="example" id="img-long"/>
            </div>
        </section>
    )
}

export default Gallery
