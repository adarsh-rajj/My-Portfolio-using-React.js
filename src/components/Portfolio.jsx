import React from "react";
import medpill from "../asserts/portfolio/medpill.webp";
import ai_assistent from "../asserts/portfolio/ai_assistent.png";
import dance_website from "../asserts/portfolio/dance_website.png";
import music_assistent from "../asserts/portfolio/music_assistent.png";
import my_portfolio from "../asserts/portfolio/my_portfolio.png";
import newsUp from "../asserts/portfolio/newsUp.webp";
import tour_travel from "../asserts/portfolio/tour_travel.png";

const Portfolio = () => {
    const portfolios = [
    {
        id: 1,
        src: medpill,
    },
    {
        id: 2,
        src: newsUp,
    },
    {
        id: 3,
        src: dance_website,
    },
    {
        id: 4,
        src: ai_assistent,
    },
    {
        id: 5,
        src: tour_travel,
    },
    {
        id: 6,
        src: music_assistent,
    },
    {
        id: 7,
        src: my_portfolio,
    },
    ];

    return (
    <div
        name="portfolio"
        className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
            </p>
            <p className="py-6">Check out some of my Project work right here</p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-4 gap-10 px-12 sm:px-0">
            {portfolios.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
                />
                <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Live
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Code/Link
                </button>
                </div>
            </div>
            ))}
        </div>
        </div>
    </div>
    );
};

export default Portfolio;