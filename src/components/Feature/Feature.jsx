import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faSackDollar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Feature = ({ feature }) => {
  const {
    id,
    logo,
    title,
    companyName,
    remoteOrOnsite,
    location,
    jobTime,
    salary,
    job_description,
    job_responsibility,
    educationalRequirements,
    experiences,
    contactInformation,
  } = feature;
  return (
    <div className="p-8 rounded-lg border border-[#E8E8E8]">
      <img className="w-32 mb-8" src={logo} alt="Job logo" />
      <h3 className="font-extrabold mb-2 text-xl sm:text-2xl text-[#474747]">
        {title}
      </h3>
      <p className="text-base sm:text-xl font-semibold mb-4">{companyName}</p>
      <div className="flex flex-col sm:flex-row gap-4">
        <button className="py-2 border border-blue-500 text-blue-500 text-center rounded-md w-32 font-extrabold">
          {remoteOrOnsite}
        </button>
        <button className="py-2 border border-blue-500 text-blue-500 text-center rounded-md w-32 font-extrabold">
          {jobTime}
        </button>
      </div>
      <div className="mt-5 flex flex-col xl:flex-row xl:items-center gap-4">
        <div className="font-semibold gap-2 text-lg flex items-center">
          <FontAwesomeIcon icon={faLocationDot} />
          <p>{location}</p>
        </div>
        <div className="font-semibold text-lg gap-2 flex items-center">
          <FontAwesomeIcon icon={faSackDollar} />
          <p>Salary: {salary}</p>
        </div>
      </div>
      <p className="py-2 mt-6 w-36 text-center rounded-md text-white inline-block font-extrabold text-xl bg-gradient-to-r from-blue-500 to-blue-600">
        {" "}
        <Link to={`/jobDetails/${id}`}>View Details</Link>
      </p>
    </div>
  );
};

export default Feature;
