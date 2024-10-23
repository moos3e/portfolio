import React from 'react';

const Experience: React.FC = () => {
    return (
        <section id="experience" className="sec experience">
            <div className="container">
                <div className="body-container">
                    <div className="column1">
                        <h1 className="topics">Work Experience</h1>

                        <div className="experience-item">
                            <div className="description">
                                <h3>General Dynamics Mission Systems</h3>
                                <h4>Software Engineer Intern</h4>
                                <h5>May 2024 - August 2024</h5>
                                <p>
                                    Developed full-stack Grafana dashboards and a React application to deliver real-time satellite performance metrics for the Space Development Agency.
                                </p>
                            </div>
                            <div className="skills">
                                <ul>
                                    <li>Java</li>
                                    <li>React</li>
                                    <li>REST APIs</li>
                                    <li>Grafana</li>
                                </ul>
                            </div>
                        </div>

                        <div className="experience-item">
                            <div className="description">
                                <h3>General Dynamics Mission Systems</h3>
                                <h4>Software Engineer Intern</h4>
                                <h5>May 2023 - August 2023</h5>
                                <p>
                                    Developed Java and C++ applications for satellite data processing, leveraging Kafka, Podman, and Docker to ensure efficient and scalable data solutions.
                                </p>
                            </div>
                            <div className="skills">
                                <ul>
                                    <li>Java</li>
                                    <li>C++</li>
                                    <li>Docker</li>
                                    <li>Kafka</li>
                                </ul>
                            </div>
                        </div>

                        <div className="experience-item">
                            <div className="description">
                                <h3>Somali American United Council</h3>
                                <h4>IT Specialist Volunteer</h4>
                                <h5>August 2019 - Present</h5>
                                <p>
                                    Provided over 300 hours of technological solutions and training to enhance workplace efficiency and community digital literacy.
                                </p>
                            </div>
                            <div className="skills">
                                <ul>
                                    <li>IT Support</li>
                                    <li>Technical Training</li>
                                    <li>Community Outreach</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;