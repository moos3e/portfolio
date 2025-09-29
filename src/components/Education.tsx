import React from 'react';
import '../styles/Education.css'; // Importing the scoped CSS file

const Education: React.FC = () => {
    return (
        <div className="education-container bg-white rounded-xl shadow-lg p-10 md:p-8 sm:p-4 my-28 md:my-16 sm:my-6 max-w-2xl w-full font-mono text-gray-800">
            <h2 className="school-name text-2xl md:text-xl sm:text-lg font-bold mb-10 text-center">
                <span className="arizona">Arizona </span>
                <span className="state">State </span>
                <span className="university">University </span>
                - Ira A. Fulton Schools of Engineering
            </h2>
            <div className="degree-info mb-4">B.S. Computer Science <span>— Graduated May 2025</span></div>
            <h4 className="education-info font-semibold mb-2">Key Courses:</h4>
            <p className="education-info mb-4 text-sm md:text-base">
                Principles of Programming (CSE 110); Object-Oriented Programming (CSE 205);
                Data Structures and Algorithms (CSE 310); Software Engineering (CSE 360);
                Operating Systems (CSE 330); Distributed Software Development (CSE 445);
                Machine Learning (CSE 475); Database Management (CSE 412);
                Human-Computer Interaction (CSE 463); Capstone Project I & II (CSE 485/486)
            </p>
            <h4 className="education-info font-semibold mb-2">Organizations:</h4>
            <ul className="education-organizations list-disc pl-5 text-sm md:text-base">
                <li>NATIONAL SOCIETY OF BLACK ENGINEERS (NSBE)</li>
                <li>SOMALI STUDENT ASSOCIATION</li>
                <li>MUSLIM STUDENT ASSOCIATION</li>
                <li>CODE2040</li>
            </ul>
        </div>
    );
};

export default Education;