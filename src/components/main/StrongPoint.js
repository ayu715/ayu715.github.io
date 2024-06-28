import React from 'react';
import { KEYWORD } from '../utils/data';

const StrongPoint = () => {
  return (
    <section id="strongpoint" className="p-12 bg-orange-50 text-black">
      <div className="container mx-auto">
        <h2 className="text-center text-7xl">나의 장점</h2>
        <div className="relative mt-12">
          <div className="w-1/3 mx-auto overflow-hidden cursor-pointer">
            <img src='/profile/my4.jpg' alt="about_img2" className="w-full transition-transform duration-500 transform scale-100 hover:scale-125 h-[700px]" />
          </div>
        </div>
        <div className="flex justify-between mt-24">
          <h3 className="w-1/2 text-5xl">나의 장점<span className="block mt-4 text-2xl text-gray-500"></span></h3>
          <ul className="w-1/2 space-y-12">
            {KEYWORD.map(item => (
              <li key={item.id} className="border-b pb-5 border-gray-400">
                <dl>
                  <dd className="flex items-center mb-4 text-xl">
                    <span className="flex items-center justify-center w-8 h-8 mr-4 text-lg text-white bg-gray-600 rounded-full">{item.id}</span>
                    {item.title}
                  </dd>
                  <dt className="text-lg text-justify">{item.text}</dt>
                </dl>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default StrongPoint;
