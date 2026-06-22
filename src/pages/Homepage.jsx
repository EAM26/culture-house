import React from 'react';
import Hero from "../components/Hero.jsx";
import Info from "../components/Info.jsx";
import CardSection from "../components/CardSection.jsx";
import Card from "../components/Card.jsx";

function Homepage(props) {
    return (
        <main className="font-montserrat">
            <Hero/>
            <Info
                classNameDiv="text-center font-montserrat pt-8 w-1/2 mx-auto"
                classNameTitle="text-5xl font-bold pb-8"
                titleText="Wat wij creëren"
                subTextOne="Van podcast en videoproductie tot muziekregistraties en livestreams."
                subTextTwo="Wij helpen makers, bedrijven en culturele organisaties hun verhaal professioneel vast te leggen."
            />

            <section
                // className="px-3 flex items-stretch gap-6 font-montserrat font-semibold pt-7"
                className="flex flex-col gap-6 px-3 pt-7 font-montserrat font-semibold"
            >
                <Card
                    classNameDiv="flex-1 bg-gray-200 rounded-2xl flex-col items-center text-center px-2 py-5"
                    classNameTitle="text-4xl font-bold text-blue-900"
                    titleText="Podcast"
                    subText="Voor podcasters, muzikanten, presentatoren en creatieve professionals."
                />
                <Card
                    classNameDiv="flex-1 bg-gray-200 rounded-2xl flex-col items-center text-center px-2 py-5"
                    classNameTitle="text-4xl font-bold text-blue-900"
                    titleText="Video"
                    subText="Videoproducties, interviews en registraties voor makers, bedrijven en culturele organisaties."
                />
                <Card
                    classNameDiv="flex-1 bg-gray-200 rounded-2xl flex-col items-center text-center px-2 py-5"
                    classNameTitle="text-4xl font-bold text-blue-900"
                    titleText="Muziek"
                    subText="Audio- en video-opnames voor artiesten, ensembles en culturele producties."
                />
                <Card
                    classNameDiv="flex-1 bg-gray-200 rounded-2xl flex-col items-center text-center px-2 py-5"
                    classNameTitle="text-4xl font-bold text-blue-900"
                    titleText="Livestreams"
                    subText="Van webinars en concerten tot hybride evenementen. Wij brengen jouw publiek samen, waar het ook is."
                />
            </section>
            <Info
                classNameDiv="text-center font-montserrat pt-8"
                classNameTitle="text-5xl font-bold pb-8"
                titleText="Voor wie werken wij"
                subTextOne="Wij werken voor makers, bedrijven en culturele organisaties die hun verhaal professioneel willen vertellen."
            />
            <section
                className="flex flex-col gap-6 px-3 pt-7 font-montserrat font-semibold"
            >

                <Card
                    classNameDiv="flex-1  rounded-md flex-col items-center text-center px-2 py-5"
                    classNameTitle="text-3xl font-bold text-blue-900"
                    titleText="Makers"
                    subText="Voor podcasters, muzikanten, presentatoren en creatieve professionals."
                />
                <Card
                    classNameDiv="flex-1  rounded-md flex-col items-center text-center px-2 py-5"
                    classNameTitle="text-3xl font-bold text-blue-900"
                    titleText="Bedrijven"
                    subText="Voor organisaties die podcasts, interviews en videoproducties professioneel willen inzetten."
                />
                <Card
                    classNameDiv="flex-1  rounded-md flex-col items-center text-center px-2 py-5"
                    classNameTitle="text-3xl font-bold text-blue-900"
                    titleText="Culturele Organisaties"
                    subText="Voor theaters, festivals, concertzalen en culturele instellingen die hun publiek willen bereiken met hoogwaardige producties."
                />
            </section>

        </main>
    );
}

export default Homepage;