import React from 'react';
import { useParams } from 'react-router-dom';

const projects = [
  {
    id: 'project1',
    title: 'Project 1',
    detail: 'Detailed description of Project 1...'
  },
  {
    id: 'project2',
    title: 'Project 2',
    detail: 'Detailed description of Project 2...'
  },
  {
    id: 'project3',
    title: 'Project 3',
    detail: 'Detailed description of Project 3...'
  }
];

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return <p>Project not found</p>;
  }

  return (
    <section className="p-12 bg-white">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
        <p>{project.detail}</p>
      </div>
    </section>
  );
};

export default ProjectDetail;
