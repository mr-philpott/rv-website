import React from 'react'

const Gallery = () => {
    return (
        <section className="photos" id="gallery">
            <div id="foot-triangle"></div>
            
            <h3>Gallery</h3>

            <div className="gallery">
                <img src="https://picsum.photos/200/301" alt="example" />
                <img src="https://picsum.photos/200/302" alt="example" />
                <img src="https://picsum.photos/200/303" alt="example" />
                <img src="https://picsum.photos/200/304" alt="example" />
                <img src="https://picsum.photos/200/305" alt="example" />
                <img src="https://picsum.photos/200/306" alt="example" />
            </div>
        </section>
    )
}

export default Gallery
