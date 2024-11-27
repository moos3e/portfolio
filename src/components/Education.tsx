import React from 'react';
import '../styles/education.css'; // Importing the scoped CSS file

const Education: React.FC = () => {
    return (
        <div className="education-container">
            <h2 className="school-name">
                <span className="arizona">Arizona </span>
                <span className="state">State </span>
                <span className="university">University </span>
                - Ira A. Fulton Schools of Engineering
            </h2>
            <h4 className="education-info">
                Computer Science Software Engineering - Expected May 2025
            </h4>
            <p className="education-info">
                Completed courses: CSE 205 (Object-Oriented Program & Data Structures), CSE110 (Principles of Programming), FSE 100 (Introduction to Engineering), MAT 266 (Calculus II), MAT 265 (Calculus I)
            </p>
            <p className="education-info">
                Currently enrolled courses: CSE 120 (Digital Design Fundamentals), CSE 240 (Intro to Programming Languages), MAT267 (Calculus III)
            </p>
            <h4 className="education-info">Organizations:</h4>
            <ul className="education-organizations">
                <li>NATIONAL SOCIETY OF BLACK ENGINEERS</li>
                <li>SOMALI STUDENT ASSOCIATION</li>
                <li>MUSLIM STUDENT ASSOCIATION</li>
                <li>CODE2040</li>
            </ul>
        </div>
    );
};

export default Education;