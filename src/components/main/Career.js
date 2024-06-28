import React from 'react';
import { careers } from '../utils/data';

const Career = () => {
  return (
    <section id="career" className="p-12 bg-gray-500 text-white">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">경력</h2>
        {careers.map((career, index) => (
          <div key={index} className="flex flex-col md:flex-row mb-8">
            <div className="md:w-1/3 mb-4 md:mb-0">
              <p className="text-gray-500">{career.period}</p>
              <h3 className="text-xl font-bold">{career.title}</h3>
              <p className="text-lg">{career.role}</p>
            </div>
            <div className="md:w-2/3">
              <p>{career.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Career;
