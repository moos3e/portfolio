import React from 'react';
import Slideshow from './Slideshow';
import '../styles/Projects.css';

const Projects: React.FC = () => {
    return (
        <div className="projects-container bg-white rounded-xl shadow-lg p-10 md:p-8 sm:p-4 my-28 md:my-16 sm:my-6 max-w-2xl w-full font-mono text-gray-800">
            <h2 className="projects-header text-2xl md:text-xl sm:text-lg font-bold mb-10 text-center">Projects</h2>
            <div className="project-item flex flex-col md:flex-row gap-4 mb-8">
                <div className="project-description flex-1">
                    <h5 className="font-bold">
                        <a href="https://github.com/moos3e/The-Helper-Hat"
                            className="projlink float-on-hover"
                            target="_blank"
                            rel="noopener noreferrer">
                            Helper Hat
                        </a>
                    </h5>
                    <p className="text-sm md:text-base">
                        Designed a wearable hat equipped with sensors to aid visually impaired individuals in detecting
                        nearby objects, reducing collision risks through technology similar to automotive systems.
                    </p>
                    <ul className="flex flex-wrap gap-2 text-xs md:text-sm">
                        <li>Arduino</li>
                        <li>Ultrasonic Sensors</li>
                        <li>C++</li>
                        <li>Embedded Systems</li>
                    </ul>
                </div>
                <div className="project-tech flex-1 flex items-center justify-center">
                    <Slideshow />
                </div>
            </div>
            <div className="project-item flex flex-col md:flex-row gap-4 mb-8">
                <div className="project-description flex-1">
                    <h5 className="font-bold">
                        <a href="https://github.com/moos3e/syn-gen"
                            className="projlink float-on-hover"
                            target="_blank"
                            rel="noopener noreferrer">
                            Syn-gen
                        </a>
                    </h5>
                    <p className="text-sm md:text-base">
                        Integrated a third-party API to provide enriched and accurate synonyms, enhancing user experience
                        with a responsive interface using TypeScript, Vite, and React.
                    </p>
                    <ul className="flex flex-wrap gap-2 text-xs md:text-sm">
                        <li>TypeScript</li>
                        <li>React</li>
                        <li>Vite</li>
                        <li>Third-Party API Integration</li>
                    </ul>
                </div>
                <div className="project-tech flex-1 flex items-center justify-center">
                    <Slideshow />
                </div>
            </div>
            <div className="project-item flex flex-col md:flex-row gap-4 mb-8">
                <div className="project-description flex-1">
                    <h5 className="font-bold">
                        <a href="https://github.com/moos3e/portfolio"
                            className="projlink float-on-hover"
                            target="_blank"
                            rel="noopener noreferrer">
                            Website Portfolio
                        </a>
                    </h5>
                    <p className="text-sm md:text-base">
                        Developed a modern and responsive personal website to showcase projects and skills, optimizing it
                        for SEO and implementing interactive features using JavaScript.
                    </p>
                    <ul className="flex flex-wrap gap-2 text-xs md:text-sm">
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>CSS</li>
                        <li>SEO Optimization</li>
                    </ul>
                </div>
                <div className="project-tech flex-1 flex items-center justify-center">
                    <Slideshow />
                </div>
            </div>
        </div>
    );
};

export default Projects;