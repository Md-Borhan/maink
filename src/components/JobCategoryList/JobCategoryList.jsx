import React from "react";

const JobCategoryList = ({ jobCategorye }) => {
  const { category_logo, jobs_available, category_name } = jobCategorye;
  return (
    <div className="bg-[#FAF8FF] p-10 rounded-lg">
      <img
        className="bg-[#EFECFF] rounded-lg p-4 mb-8"
        src={category_logo}
        alt=""
      />
      <p className="font-extrabold text-xl mb-2 text-[#474747]">
        {category_name}
      </p>
      <p className="text-[#A3A3A3]">{jobs_available}</p>
    </div>
  );
};

export default JobCategoryList;
