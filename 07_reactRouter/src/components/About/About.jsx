import React from "react";
import about from "../../assets/about.png";

export default function About() {
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img className="w-screen h-120" src={about} alt="image" />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              React development is carried out by passionate developers
            </h2>
            <p className="mt-6 text-gray-600">
              We are a forward-thinking company focused on delivering
              high-quality digital solutions that help businesses grow and adapt
              in a fast-changing world. Our team combines creativity,
              technology, and strategic thinking to build products that are
              reliable, scalable, and user-friendly. We believe in innovation,
              transparency, and long-term partnerships with our clients.
            </p>
            <p className="mt-4 text-gray-600">
              Our company is committed to delivering excellence through
              technology-driven solutions. With a strong focus on quality,
              performance, and customer satisfaction, we help organizations
              achieve their goals by providing reliable and innovative services
              tailored to their needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
