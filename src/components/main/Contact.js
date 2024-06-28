import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="p-12 text-black bg-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">Contact</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-blue-800">이름:</h3>
            <p className="text-lg">곽양신</p>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-blue-800">연락처:</h3>
            <p className="text-lg">010-5626-1822</p>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-blue-800">주소:</h3>
            <p className="text-lg">서울특별시 성동구 성수동2가</p>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-blue-800">이메일 주소:</h3>
            <p className="text-lg">g56261822@gmail.com</p>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-blue-800">깃허브 주소:</h3>
            <p className="text-lg">
              <a href="https://github.com/ayu715" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">https://github.com/ayu715</a>
            </p>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-blue-800">노션 주소:</h3>
            <p className="text-lg">
              <a href="https://www.notion.so/4-Beer-5d54edc1e7574cf58fc50d979819fd3b" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">https://www.notion.so/4-Beer-5d54edc1e7574cf58fc50d979819fd3b</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
