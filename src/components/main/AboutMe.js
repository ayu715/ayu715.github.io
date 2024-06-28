import React from 'react';
import { DESC_BOTTOM, DESC_TOP } from '../utils/data';

const AboutMe = () => {
  return (
    <section id="aboutme" className="relative p-12  text-black bg-orange-100 font-sans">
      <div className="container mx-auto">
        <h2 className="text-center text-7xl">자기소개</h2>
        <div className="relative w-1/2 mx-auto mt-12">
          <img src='/profile/my.png' alt="about_img2" className="w-full hover:grayscale-0 transition duration-400" />
        </div>
        <div className="absolute top-20 right-1/3 w-40 animate-spin">
        </div>
        <div className="mt-12 text-center">
          <h3 className="text-5xl">안녕하세요 곽양신입니다.<span className="block text-4xl mt-2">BACK-END DEVELOPER</span></h3>
          <div className="mt-12 text-xl">
            {DESC_TOP.map(item => (
              <div key={item.id} className={`mb-8 ${item.id === 1 ? 'font-semibold' : ''}`}>
                <p>{item.p}</p>
                <p><strong>{item.strong}</strong></p>
              </div>
            ))}
            <div className="flex justify-between mt-8">
              {DESC_BOTTOM.map(item => (
                <div key={item.id} className="w-1/2 text-justify">
                  {item.p.split('<br/>').map((line, index) => (
                    <p key={index} className="mb-4">{line}</p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
