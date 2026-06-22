import React from 'react';
import podcastImage from "../assets/images/podcast-2.png"

function Hero(props) {
    return (
        <hero>
            <img src={podcastImage}
                 alt="podcast photo"
                 className="w-full"
            />
        </hero>
    );
}

export default Hero;