import React from 'react';
import Card from "./Card.jsx";

function CardSection(props) {
    return (
        <div
        className="px-3 flex items-stretch gap-6"
        >
            <Card
                classNameDiv="flex-1 bg-gray-300 rounded-md flex-col items-center text-center px-2 py-5"
                titleText="Podcast"
                subText="Voor podcasters, muzikanten, presentatoren en creatieve professionals."
            />
            <Card
                classNameDiv="flex-1 bg-gray-300 rounded-md flex-col items-center text-center px-2 py-5"
                titleText="Video"
                subText="Videoproducties, interviews en registraties voor makers, bedrijven en culturele organisaties."
            />
            <Card
                classNameDiv="flex-1 bg-gray-300 rounded-md flex-col items-center text-center px-2 py-5"
                titleText="Muziek"
                subText="Audio- en video-opnames voor artiesten, ensembles en culturele producties."
            />
            <Card
                classNameDiv="flex-1 bg-gray-300 rounded-md flex-col items-center text-center px-2 py-5"
                titleText="Livestreams"
                subText="Van webinars en concerten tot hybride evenementen. Wij brengen jouw publiek samen, waar het ook is."
            />
        </div>
    );
}

export default CardSection;