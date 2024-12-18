import './hero.css';


export const Hero = ()=>{



    return(
        <div className="hero-container">
            <div className="hero-top">
                <h1 className="hero-title">
                    Learn Crypto: Crypto Made Easy 
                </h1>
                <p className="hero-p"> Bite-sized learning you can apply straight away in real life</p>
            </div>
            <div className="hero-btns-container">
                <button className="hero-button-start">Start learning</button>
                <button className="hero-button-explore">Explore feed</button>
            </div>
        </div>
    )
};