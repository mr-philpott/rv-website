import React from 'react'

const Gallery = () => {
    return (
        <section className="photos">
            <div id="foot-triangle"></div>
            
            <h3>Gallery</h3>

            <div className="gallery-grid">
                <div className="cols">
                    <div className="row1">
                        <img src="https://picsum.photos/500/900" alt="example" id="img-big1square"/>
                        <img src="https://picsum.photos/500/650" alt="example" id="img-square1"/>
                    </div>
                    <div className="row2">
                        <img src="https://picsum.photos/500/650" alt="example" id="img-square2"/>
                        <img src="https://picsum.photos/500/900" alt="example" id="img-big2square"/>
                    </div>
                </div>
                <div className="row3">
                        <img src="https://picsum.photos/650/500" alt="example" id="img-long"/>
                    </div>
            </div>
        </section>
    )
}

export default Gallery
