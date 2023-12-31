import React from "react";
import html from "../asserts/html.png";
import css from "../asserts/css.png";
import javascript from "../asserts/javascript.png";
import reactImage from "../asserts/react.png";
import node from "../asserts/node.png";
import python from "../asserts/python.png";
import github from "../asserts/github.png";
import tailwind from "../asserts/tailwind.png";
import sql from "../asserts/sql.png";

const Experience = () => {
    const techs = [
    {
        id: 1,
        src: html,
        title: "HTML",
        style: "shadow-orange-500",
    },
    {
        id: 2,
        src: css,
        title: "CSS",
        style: "shadow-orange-500",
    },
    {
        id: 3,
        src: javascript,
        title: "JavaScript",
        style: "shadow-orange-500",
    },
    {
        id: 4,
        src: reactImage,
        title: "React",
        style: "shadow-white",
    },
    {
        id: 5,
        src: tailwind,
        title: "Tailwind",
        style: "shadow-white",
    },
    {
        id: 6,
        src: node,
        title: "Node JS",
        style: "shadow-white",
    },
    {
        id: 7,
        src: python,
        title: "Python",
        style: "shadow-green-400",
    },
    {
        id: 8,
        src: github,
        title: "GitHub",
        style: "shadow-green-400",
    },
    {
        id: 9,
        src: sql,
        title: "SQL",
        style: "shadow-green-400",
    },
    ];

    return (
    <div
        name="experience"
        className="bg-gradient-to-b from-gray-800 to-black w-full text-white md:h-screen-100"
    >
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
            <p className="text-4xl font-bold border-b-2 border-gray-500 p-2 inline">
            Experience
            </p>
            <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
            {techs.map(({ id, src, title, style }) => (
            <div
                key={id}
                className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
                <img src={src} alt="" className="w-20 mx-auto" />
                <p className="mt-4">{title}</p>
            </div>
            ))}
        </div>
        </div>
    </div>
    );
};

export default Experience;