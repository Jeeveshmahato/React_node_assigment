import React from 'react'

export default function About() {
  return (
      <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12">
                      <img
                          src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                          alt="image"
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                      Grafikally Studio
                      </h2>
                      <p className="mt-6 text-gray-600">
                      One-stop solution for all your design needs, a multifaceted studio to help your brand grow digitally. We expertise in creative brand direction and startergy, helping brands to grow into their full potential.
                      </p>
                      
                      <p className="mt-4 text-gray-600"><h2> Specialties :-</h2>
                    creative direction, graphic design, digital marketing, photography, branding, brand development, and video editing
                      </p>
                  </div>
              </div>
          </div>
      </div>
  );
}