import React, { useState } from 'react';
import { projectData, projects } from '../utils/data'; // 수정된 부분
import ProjectModal from '../project/ProjectModal';

const SideProjects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (projectId) => {
    setSelectedProject(projectData[projectId]);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="sideprojects" className="p-12 bg-gray-500 text-white">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">사이드 프로젝트</h2>
        {projects.map((project, index) => (
          <div key={index} className="flex flex-col md:flex-row mb-8">
            <div className="md:w-1/3 mb-4 md:mb-0">
              <p className="text-gray-500">{project.period}</p>
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="text-lg">{project.role}</p>
              <button
                onClick={() => openModal(project.id)}
                className="bg-blue-500 text-white px-4 py-2 mt-2 inline-block rounded-lg hover:bg-blue-600"
              >
                프로젝트 상세 보기
              </button>
            </div>
            <div className="md:w-2/3">
              <p>{project.description}</p>
              <p>{project.detail}</p>
            </div>
          </div>
        ))}
        {selectedProject && (
          <ProjectModal project={selectedProject} closeModal={closeModal} />
        )}
      </div>
    </section>
  );
};

export default SideProjects;
