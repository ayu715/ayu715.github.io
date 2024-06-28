import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white p-4 fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-2xl font-bold font-sans text-white">YangShin's Portfolio</a>
        <nav>
          <ul className="flex space-x-6 text-lg font-sans">
            <li><a href="#intro" className="text-white hover:text-yellow-400 transition-colors">메인</a></li>
            <li><a href="#aboutme" className="text-white hover:text-yellow-400 transition-colors">자기소개</a></li>
            <li><a href="#strongpoint" className="text-white hover:text-yellow-400 transition-colors">장점</a></li>
            <li><a href="#techstack" className="text-white hover:text-yellow-400 transition-colors">기술스택</a></li>
            <li><a href="#career" className="text-white hover:text-yellow-400 transition-colors">경력</a></li>
            <li><a href="#sideprojects" className="text-white hover:text-yellow-400 transition-colors">사이드 프로젝트</a></li>
            <li><a href="#contact" className="text-white hover:text-yellow-400 transition-colors">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
