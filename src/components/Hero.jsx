import React from 'react';
import podcastImage from "../assets/images/podcast-2.png"

function Hero(props) {
    return (
        // <div className="relative">
        <div className="relative h-[480px] w-full overflow-hidden">
            <img src={podcastImage}
                 alt="podcast photo"
                 className="
                 h-full w-full object-none object-bottom relative z-10"
            />

            <p className="absolute z-20 bottom-50 left-3 text-white">Jouw verhaal verdient een professionele productie.</p>
            <p className="absolute z-20 bottom-40 left-3 text-white">Audio • Video • Podcast • Live</p>
            <p className="absolute z-20 bottom-30 left-3 text-white">In onze studio of op locatie.</p>


            <button
                className="absolute z-20 bottom-2 left-3  rounded-xl border border-white/80 bg-black/70 font-medium text-white backdrop-blur-xl w-5/12 h-16 px-2">
                Plan een kennismaking
            </button>
            <button
                className="absolute z-20 bottom-2 right-3 rounded-xl border border-white/80 bg-black/70 font-medium text-white backdrop-blur-sm w-5/12 h-16">
                Bekijk ons werk
            </button>


        </div>
    );
}

export default Hero;