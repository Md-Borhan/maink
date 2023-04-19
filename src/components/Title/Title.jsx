import React from "react";

const Title = ({ children }) => {
  return (
    <div className="mt-8 md:mt-12 lg:mt-32 text-center mb-8">
      <h2 className="font-extrabold text-3xl  md:text-5xl mb-4 text-[#1A1919]">
        {children}
      </h2>
      <p>
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
    </div>
  );
};

export default Title;
