import React, { useEffect } from "react";
import { FaGithub, FaGithubAlt, FaGoogleDrive, FaYoutube } from "react-icons/fa";
import { RiNotionFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Footer = () => {
  useEffect(() => {
    document.getElementById("get-current-year").innerText =
      new Date().getFullYear();
  }, []);

  return (
    <footer className="w-full footer text-gray-400">
      <div className="w-full container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text text-lg">
            You can reach me at <span className="text-white ms-5 text-base"> g56261822@gmail.com </span>
            </h4>

          </div>
          <div className="w-full lg:w-6/12 px-4 flex justify-end mt-6 lg:mt-0">
            <Link target='_blank' className="px-1" to="https://www.notion.so/4a30e1f49c024297911f01f39921bd91"><RiNotionFill size="20" /></Link>
            <Link target='_blank' className="px-1" to="https://github.com/ayu715"><FaGithub size="20" /></Link>
            <Link target='_blank' className="px-1" to="https://github.com/ayu715"><FaGithubAlt size="20" /></Link>

            <br />
          </div>
        </div>
        <hr className="my-4" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-gray-500 font-semibold py-1">
              Copyright © <span id="get-current-year"></span>
              <a
                href="https://github.com/conchohi/beer_front"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white ml-1"
              >
               YangShin All rights reserved 
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
