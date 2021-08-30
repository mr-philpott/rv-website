import React from 'react'

const Home = () => {
    return (
        <div className="home">
            <div className="photo">
                <div className="img">
                    <img src="https://picsum.photos/1000/2000" alt="fight me" />
                </div>
            </div>
            <div className="landing-text">
                <div className="main">
                    <h1>
                        RV Inspection and Air Conditioning Repair
                        <div className="underline"></div>
                    </h1>
                    <p>
                        Welcome! I am a RV inspectionist and Air Conditioning Repair man.
                    </p>
                </div>
                <button>
                    Hire Me!
                </button>
            </div>
            <div className="hire-me">
                <div className="rectangle">
                    <div className="triangle"></div>
                    <button>
                        Hire Me!
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home
