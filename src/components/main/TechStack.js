import React from 'react';
import { DiJava } from 'react-icons/di';
import { FaAws, FaDocker, FaGitAlt, FaHtml5, FaNodeJs, FaReact } from 'react-icons/fa';
import { RiNotionFill } from 'react-icons/ri';
import { SiAmazonaws, SiApachetomcat, SiHibernate, SiJavascript, SiJquery, SiMongodb, SiMysql, SiNginx, SiOracle, SiPostman, SiRecoil, SiRedux, SiSpring, SiTailwindcss, SiVite  } from 'react-icons/si';

const TechStack = () => {
  const frontendTechs = [
    { name: 'JavaScript', icon: <SiJavascript className="text-yellow-500" /> },
    { name: 'React', icon: <FaReact className="text-blue-500" /> },
    { name: 'HTML/CSS', icon: <FaHtml5 className="text-orange-600" /> },
    { name: 'JSP', icon: <FaNodeJs className="text-green-500" /> },
    { name: 'Redux', icon: <SiRedux className="text-purple-500" /> },
    { name: 'Recoil', icon: <SiRecoil className="text-blue-500" /> },
    { name: 'Vite', icon: <SiVite className="text-yellow-500" /> },
    { name: 'Tailwind', icon: <SiTailwindcss className="text-yellow-500" /> },
  ];

  const backendTechs = [
    { name: 'Java', icon: <DiJava className="text-black-600" /> },
    { name: 'Servlet', icon: <FaNodeJs className="text-green-500" /> },
    { name: 'Spring Boot', icon: <SiSpring className="text-green-700" /> },
    { name: 'JPA', icon: <SiMongodb className="text-green-500" /> },
    { name: 'Hibernate', icon: <SiHibernate className="text-black-500" /> },
    { name: 'MyBatis', icon: <SiJquery className="text-blue-500" /> },
    { name: 'MySQL', icon: <SiMysql className="text-blue-600" /> },
    { name: 'Oracle', icon: <SiOracle className="text-black-700" /> },
  ];

  const tools = [
    { name: 'AWS', icon: <FaAws className="text-orange-500" /> },
    { name: 'EC2', icon: <SiAmazonaws className="text-orange-500" /> },
    { name: 'S3', icon: <SiAmazonaws className="text-orange-500" /> },
    { name: 'Git', icon: <FaGitAlt className="text-black-500" /> },
    { name: 'Docker', icon: <FaDocker className="text-blue-500" /> },
    { name: 'Nginx', icon: <SiNginx className="text-blue-600" /> },
    { name: 'Tomcat', icon: <SiApachetomcat className="text-blue-500" /> },
    { name: 'Notion', icon: <RiNotionFill className="text-black" /> },
    { name: 'Postman', icon: <SiPostman className="text-orange-500" /> },
    
  ];

  return (
    <section id="techstack" className="p-12  text-gray-800 bg-orange-50">
      <div className="container mx-auto">
        <h2 className="text-6xl font-bold mb-4 text-center">기술 스택</h2>

        <h3 className="text-3xl font-semibold mb-4">Frontend</h3>
        <ul className="flex flex-wrap justify-center gap-4 mb-8">
          {frontendTechs.map((tech) => (
            <li key={tech.name} className="flex items-center space-x-2 p-2 bg-blue-500 shadow-lg rounded-lg">
              {tech.icon}
              <span className="text-lg font-semibold">{tech.name}</span>
            </li>
          ))}
        </ul>

        <h3 className="text-3xl font-semibold mb-4">Backend</h3>
        <ul className="flex flex-wrap justify-center gap-4 mb-8">
          {backendTechs.map((tech) => (
            <li key={tech.name} className="flex items-center space-x-2 p-2 bg-pink-700 shadow-lg rounded-lg">
              {tech.icon}
              <span className="text-lg font-semibold">{tech.name}</span>
            </li>
          ))}
        </ul>

        <h3 className="text-3xl font-semibold mb-4">Tools</h3>
        <ul className="flex flex-wrap justify-center gap-4">
          {tools.map((tech) => (
            <li key={tech.name} className="flex items-center space-x-2 p-2 bg-green-600 shadow-lg rounded-lg">
              {tech.icon}
              <span className="text-lg font-semibold">{tech.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TechStack;
