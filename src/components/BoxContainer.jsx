import React from 'react';

function BoxContainer({ title, content, image, alt, right }) {
  return (
    <>
      {!right ? (
        <div className="flex flex-wrap items-center">
          <div className="w-full sm:w-1/2 md:p-6 py-4 px-6">
            <h3 className="text-3xl font-bold leading-none mb-3">{title}</h3>
            <p className=" mb-8">{content}</p>
          </div>
          <div className="w-full sm:w-1/2 md:p-6 px-6">
            <img className="w-full sm:h-64 mx-auto" src={image} alt={alt} />
          </div>
        </div>
      ) : (
        <div className="flex flex-wrap flex-col-reverse sm:flex-row items-center">
          <div className="w-full sm:w-1/2 md:p-6 px-6 mt-2">
            <img className="w-11/12 sm:h-64 mx-auto" src={image} alt={alt} />
          </div>
          <div className="w-full sm:w-1/2 md:p-6 py-4 px-6 mt-6">
            <div className="align-middle">
              <h3 className="text-3xl font-bold leading-none mb-3">{title}</h3>
              <p className="mb-8">{content}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default BoxContainer;
