import React from "react";

const About = () => {
    return (
    <div
        name="about"
        className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
            </p>
        </div>

        <p className="text-xl mt-20">
        My name is Adarsh Raj from Greater Noida
        Currently I'm in B-tech (4th year) in IT Profession from Galgotias College of Engineering and Technology. my aggregate CGPA till yet is 7.9 overall,
        I have Completed my high Schooling in my home town with overall 81% and completed my schooling with 10 CGPA, I have won Gold Medal form Prabhat Khabar(Newspaper) for securing 10 CGPA Grade and extra carricular activity in 10th.
        </p>

        <br />

        <p className="text-xl">
            My Technical skill are language which i know C, C++, Python Language in Development:- I know React.js, Node.js, HTML, CSS, JS, Database:- SQL, MongoDB.
            With the help of these technologies i Have completed 4 Project.
            My hobby is Travelling, listening music and playing vollyball.
        </p>
        </div>
    </div>
    );
};

export default About;