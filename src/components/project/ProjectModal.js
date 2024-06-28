import React from 'react';
import Draggable from 'react-draggable';
import { FaGithub, FaGithubAlt, FaYoutube } from 'react-icons/fa';
import { RiNotionFill } from 'react-icons/ri';

const ProjectModal = ({ project, closeModal }) => {
    return (
        <>
            <Draggable>
                <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
                    <div className="bg-gray-400 p-8 rounded-lg max-w-4xl w-full relative transform translate-y-[-50%] top-1/2">
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 text-gray-600 hover:text-black"
                        >
                            &times;
                        </button>
                        <section className="p-12 bg-gray-800 text-white">
                            <div className="container mx-auto">
                                <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                    {project.images.map((src, index) => (
                                        <img key={index} src={src} alt={`Project Image ${index + 1}`} className="rounded-lg w-[300px] h-[300px] object-cover" />
                                    ))}
                                </div>
                                <p className="text-lg mb-8">{project.description}</p>
                                <h3 className="text-xl font-semibold mb-2">기술 스택</h3>
                                <ul className="flex flex-wrap space-x-2 mb-8">
                                    {project.techStack.map((tech, index) => (
                                        <li key={index} className="bg-gray-600 text-white px-3 py-1 rounded-full mb-2">{tech}</li>
                                    ))}
                                </ul>
                                <div className="flex space-x-4">
                                    <a href={project.githubFrontend} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black">
                                        <FaGithub size={30} />
                                    </a>
                                    <a href={project.githubBackend} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black">
                                        <FaGithubAlt size={30} />
                                    </a>
                                    {project.notion && (
                                        <a href={project.notion} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black">
                                            <RiNotionFill size={30} />
                                        </a>
                                    )}
                                    {project.youtube && (
                                        <a href={project.youtube} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black">
                                            <FaYoutube size={30} />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </Draggable>
        </>
    );
};

export default ProjectModal;
