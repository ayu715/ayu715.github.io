import React, { useState } from 'react';
import ProjectModal from './ProjectModal';
import { projectData } from '../utils/data';


const Project1 = () => {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    return (
        <div className="p-8 bg-gray-100 min-h-screen">
            <button
                onClick={openModal}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg"
            >
                프로젝트 상세 보기
            </button>
            {showModal && <ProjectModal project={projectData.project1} closeModal={closeModal} />}
        </div>
    );
};

export default Project1;
