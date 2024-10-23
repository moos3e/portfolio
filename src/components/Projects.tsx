import React from 'react';
import Slideshow from './Slideshow';
import '../styles/Projects.css';

const Projects: React.FC = () => {
    return (
        <div className='projects-container'>
            <h2 className='projects-header'>Projects</h2>
            <div className='project-item'>
                <div className='project-description desc'>
                    <h5>
                        <a href="https://github.com/yourusername/helper-hat" className="projlink float-on-hover" target="_blank" rel="noopener noreferrer">
                            Helper Hat
                        </a>
                    </h5>
                    <p>Designed a wearable hat equipped with sensors to aid visually impaired individuals in detecting nearby objects, reducing collision risks through technology similar to automotive systems.</p>
                    <ul>
                        <li>Arduino</li>
                        <li>Ultrasonic Sensors</li>
                        <li>C++</li>
                        <li>Embedded Systems</li>
                    </ul>
                </div>
                <div className='project-tech'>
                    <Slideshow />
                </div>
            </div>
            <div className='project-item'>
                <div className='project-description desc'>
                    <h5>
                        <a href="https://github.com/yourusername/syn-gen" className="projlink float-on-hover" target="_blank" rel="noopener noreferrer">
                            Syn-gen
                        </a>
                    </h5>
                    <p>Integrated a third-party API to provide enriched and accurate synonyms, enhancing user experience with a responsive interface using TypeScript, Vite, and React.</p>
                    <ul>
                        <li>TypeScript</li>
                        <li>React</li>
                        <li>Vite</li>
                        <li>Third-Party API Integration</li>
                    </ul>
                </div>
                <div className='project-tech'>
                    <Slideshow />
                </div>
            </div>
            <div className='project-item'>
                <div className='project-description desc'>
                    <h5>
                        <a href="https://github.com/yourusername/portfolio-website" className="projlink float-on-hover" target="_blank" rel="noopener noreferrer">
                            Website Portfolio
                        </a>
                    </h5>
                    <p>Developed a modern and responsive personal website to showcase projects and skills, optimizing it for SEO and implementing interactive features using JavaScript.</p>
                    <ul>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>CSS</li>
                        <li>SEO Optimization</li>
                    </ul>
                </div>
                <div className='project-tech'>
                    <Slideshow />
                </div>
            </div>
        </div>
    );
}

export default Projects;