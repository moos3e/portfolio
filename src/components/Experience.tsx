
import React from 'react';
import '../styles/Experience.css';

const Experience: React.FC = () => {
    return (
        <div className="experience-container bg-white rounded-xl shadow-lg p-10 md:p-8 sm:p-4 my-28 md:my-16 sm:my-6 max-w-2xl w-full font-mono text-gray-800">
            <h2 className="experience-header text-2xl md:text-xl sm:text-lg font-bold mb-10 text-center">Work Experience</h2>
            {/* GDMS Software Engineer I */}
            <div className="experience-item mb-8">
                <div className="description mb-2">
                    <h3 className="font-bold">General Dynamics Mission Systems</h3>
                    <h4 className="font-semibold">Software Engineer I</h4>
                    <h5 className="text-xs mb-1">May 2025 – Present</h5>
                    <p className="text-sm md:text-base">
                        Designed and deployed Java microservices for real-time satellite data ingestion. Built Kafka pipelines and containerized workloads with Kubernetes and Rancher for scalable processing in secure cloud environments. Integrated AWS services (S3, EC2, Lambda) to support event-driven operations and security compliance.
                    </p>
                </div>
                <div className="skills mb-2">
                    <ul className="flex flex-wrap gap-2 text-xs md:text-sm">
                        <li>Java</li>
                        <li>Kafka</li>
                        <li>Kubernetes</li>
                        <li>AWS</li>
                    </ul>
                </div>
            </div>
            {/* SaveOr INC */}
            <div className="experience-item mb-8">
                <div className="description mb-2">
                    <h3 className="font-bold">SaveOr INC.</h3>
                    <h4 className="font-semibold">Software Engineer Intern</h4>
                    <h5 className="text-xs mb-1">Aug 2024 – May 2025</h5>
                    <p className="text-sm md:text-base">
                        Developed modular Angular dashboards and backend APIs using Node.js and TypeScript to support appraisal workflows. Improved responsiveness and automation through scalable design and secure data handling.
                    </p>
                </div>
                <div className="skills mb-2">
                    <ul className="flex flex-wrap gap-2 text-xs md:text-sm">
                        <li>Angular</li>
                        <li>Node.js</li>
                        <li>REST APIs</li>
                        <li>TypeScript</li>
                    </ul>
                </div>
            </div>
            {/* GDMS May-Aug 2024 */}
            <div className="experience-item mb-8">
                <div className="description mb-2">
                    <h3 className="font-bold">General Dynamics Mission Systems</h3>
                    <h4 className="font-semibold">Software Engineer Intern</h4>
                    <h5 className="text-xs mb-1">May 2024 - August 2024</h5>
                    <p className="text-sm md:text-base">
                        Built full-stack Grafana dashboards using Java, Redshift, and DynamoDB to visualize satellite metrics in real-time. Developed a React-based app for space vehicle coverage, improving planning and insight delivery.
                    </p>
                </div>
                <div className="skills mb-2">
                    <ul className="flex flex-wrap gap-2 text-xs md:text-sm">
                        <li>Java</li>
                        <li>React</li>
                        <li>REST APIs</li>
                        <li>Grafana</li>
                    </ul>
                </div>
            </div>
            {/* GDMS May-Aug 2023 */}
            <div className="experience-item mb-8">
                <div className="description mb-2">
                    <h3 className="font-bold">General Dynamics Mission Systems</h3>
                    <h4 className="font-semibold">Software Engineer Intern</h4>
                    <h5 className="text-xs mb-1">May 2023 - August 2023</h5>
                    <p className="text-sm md:text-base">
                        Built Java and C++ applications for satellite data decoding and processing. Leveraged Kafka, Podman, and Docker for scalable and secure ingestion pipelines in the SDA mission stack.
                    </p>
                </div>
                <div className="skills mb-2">
                    <ul className="flex flex-wrap gap-2 text-xs md:text-sm">
                        <li>Java</li>
                        <li>C++</li>
                        <li>Docker</li>
                        <li>Kafka</li>
                    </ul>
                </div>
            </div>
            {/* Somali American United Council */}
            <div className="experience-item mb-8">
                <div className="description mb-2">
                    <h3 className="font-bold">Somali American United Council</h3>
                    <h4 className="font-semibold">IT Specialist Volunteer</h4>
                    <h5 className="text-xs mb-1">August 2019 - Present</h5>
                    <p className="text-sm md:text-base">
                        Delivered 300+ hours of community IT support. Led technical training and infrastructure upgrades to boost digital literacy and engagement through local outreach programs.
                    </p>
                </div>
                <div className="skills mb-2">
                    <ul className="flex flex-wrap gap-2 text-xs md:text-sm">
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