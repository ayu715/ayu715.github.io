import React, { useState, useEffect } from 'react';
import './Intro.css';  // CSS 파일을 포함합니다.

const Intro = () => {
  const [isFirstText, setIsFirstText] = useState(true);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeIn(false);
      setTimeout(() => {
        setIsFirstText(prev => !prev);
        setFadeIn(true);
      }, 500); 
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const firstText = [
    "안녕하세요. 반갑습니다.",
    "저는 곽양신입니다.",
    "잘 부탁드리겠습니다!"
  ];

  const secondText = [
    "조금 늦게 출발했지만",
    "그만큼 더 열심히 노력하는",
    "신입 백엔드 개발자입니다."
  ];

  const currentText = isFirstText ? firstText : secondText;

  return (
    <section id="intro" className="relative mt-20 h-[60rem] p-12 overflow-hidden bg-gray-800">
      <div className="absolute top-1/2 left-20 z-10 transform -translate-y-1/2">
        <p className="text-7xl text-white">저는</p>
        <p className="text-7xl">
          <em className="text-pink-600 typing">JAVA Back-END 개발자</em>
        </p>
        <p className="text-7xl text-white">
          <span className="text-pink-600"></span> 입니다.
        </p>
        <div className={`mt-8 text-4xl text-white transition-opacity duration-500 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
          {currentText.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
      </div>
      <div className="absolute right-20 bottom-[-8%] w-1/3 overflow-hidden rounded-t-full">
        <img src='/profile/my2.jpg' alt='about_img' className="w-full" />
      </div>
      <div className="absolute bottom-10 left-20 text-white text-2xl">
        <p className="flex"><span className="font-bold w-32">학력:</span> <span>한성대학교 정보시스템공학과</span></p>
        <p className="flex"><span className="font-bold w-32">전화번호:</span> <span>010-5626-1822</span></p>
        <p className="flex"><span className="font-bold w-32">주소:</span> <span>서울특별시 성동구 성수동2가</span></p>
        <p className="flex"><span className="font-bold w-32">이메일:</span> <span>g56261822@gmail.com</span></p>
      </div>
    </section>
  );
};

export default Intro;
