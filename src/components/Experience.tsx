import React from 'react';
import '../styles/Experience.css';

const Experience: React.FC = () => {
    return (
        <div className="experience-container">
            <h2 className="experience-header">Work Experience</h2>

            {/* SaveOr INC */}
            <div className="experience-item">
                <div className="description">
                    <h3>SaveOr INC.</h3>
                    <h4>Software Engineer Intern</h4>
                    <h5>August 2024 - Present</h5>
                    <p>
                        Built modular Angular dashboards with reusable components and integrated a scalable backend
                        to streamline workflow automation and improve system responsiveness.
                        Designed and implemented RESTful APIs using Node.js, Express, and TypeScript, enabling
                        efficient CRUD operations, secure data handling, and seamless frontend integration.
                    </p>
                </div>
                <div className="skills">
                    <ul>
                        <li>Angular</li>
                        <li>Node.js</li>
                        <li>REST APIs</li>
                        <li>TypeScript</li>
                    </ul>
                </div>
            </div>

            {/* GDMS May-Aug 2024 */}
            <div className="experience-item">
                <div className="description">
                    <h3>General Dynamics Mission Systems</h3>
                    <h4>Software Engineer Intern</h4>
                    <h5>May 2024 - August 2024</h5>
                    <p>
                        Engineered full-stack Grafana dashboards using Java, Amazon Redshift, and DynamoDB to
                        deliver real-time satellite performance metrics, enhancing situational awareness and
                        decision-making for the SDA program. Developed a React application integrated with RESTful
                        APIs, enabling real-time data retrieval and dynamic visualization of space vehicle coverage.
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

            {/* GDMS May-Aug 2023 */}
            <div className="experience-item">
                <div className="description">
                    <h3>General Dynamics Mission Systems</h3>
                    <h4>Software Engineer Intern</h4>
                    <h5>May 2023 - August 2023</h5>
                    <p>
                        Developed Java and C++ applications for the SDA (Space Development Agency) program TDF
                        (Transfer Data Fusion), collecting, decoding, and processing data from multiple satellites.
                        Leveraged Kafka, Podman, and Zookeeper to create efficient and scalable data processing
                        solutions, adhering to strict security requirements.
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

            {/* Somali American United Council */}
            <div className="experience-item">
                <div className="description">
                    <h3>Somali American United Council</h3>
                    <h4>IT Specialist Volunteer</h4>
                    <h5>August 2019 - Present</h5>
                    <p>
                        Provided over 300 hours of technological solutions and training to enhance workplace efficiency
                        and community digital literacy. Led IT infrastructure improvements, offering hands-on technical
                        training and increasing community engagement through innovative technology programs.
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
    );
};

export default Experience;