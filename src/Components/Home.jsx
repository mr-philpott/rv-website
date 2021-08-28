import React from 'react'

const Home = () => {
    return (
        <div className="home">
            <div className="photo">
                {/* Replace Picsum photo with image of person */}
                <img src="https://picsum.photos/1000/1000" alt="Photo of me" />
            </div>
            <div className="slogan">
                <h2>Have an RV Problem? Rely on us to get the job done</h2>
            </div>
        </div>
    )
}

export default Home
