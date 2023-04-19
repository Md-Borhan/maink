import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faLocationDot, faSackDollar } from "@fortawesome/free-solid-svg-icons";
import Button from "../Button/Button";

const AppliedJob = () => {
  const getDataFromStorage = JSON.parse(localStorage.getItem("addJobData"));
  const [getData, setJobData] = useState([]);

  // Filter Remote Data
  const handleRemote = () => {
    const filterByRemote = getDataFromStorage?.filter(
      (remote) => remote.remoteOrOnsite == "Remote"
    );
    setJobData(filterByRemote);
  };
  const handleShowAll = () => {
    setJobData(getDataFromStorage);
  };

  // Filter Onsite Data
  const handleOnsite = () => {
    const filterByOnsite = getDataFromStorage?.filter(
      (onsite) => onsite.remoteOrOnsite == "Onsite"
    );
    setJobData(filterByOnsite);
  };

  // Get Data From Local Storage
  useEffect(() => {
    setJobData(getDataFromStorage);
  }, []);

  return (
    <div className="w-full lg:w-11/12 mx-auto">
      <h2 className="md:text-3xl text-center text-2xl font-extrabold mt-4 mb-8 text-[#1A1919]">
        Applied Jobs
      </h2>
      {getData ? (
        <div className="flex flex-col md:flex-row items-center  justify-end mb-6 gap-6">
          <span onClick={handleShowAll}>
            <Button>Show All</Button>
          </span>
          <span onClick={() => handleRemote(getData)}>
            {" "}
            <Button>Show Remote Job</Button>
          </span>
          <span onClick={() => handleOnsite(getData)}>
            <Button>Show Onsite Job</Button>
          </span>
        </div>
      ) : (
        ""
      )}
      {getData?.map((singleJob) => (
        <div
          key={singleJob.id}
          className="flex flex-col md:flex-row items-center mb-6 rounded-md justify-between border border-[#E8E8E8]"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-center gap-6 p-8">
            <div className="bg-gray-100 w-60 h-60 flex items-center justify-center rounded-lg">
              <img className="w-36" src={singleJob.logo} alt="" />
            </div>
            <div>
              <h3 className="font-extrabold text-2xl text-[#474747] mb-2">
                {singleJob.title}
              </h3>
              <p className="text-2xl font-semibold mb-3">
                {singleJob.companyName}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <button className="py-2 border border-blue-500 text-blue-500 text-center rounded-md w-32 font-extrabold">
                  {singleJob.remoteOrOnsite}
                </button>
                <button className="py-2 border border-blue-500 text-blue-500 text-center rounded-md w-32 font-extrabold">
                  {singleJob.jobTime}
                </button>
              </div>
              <div className="mt-5 flex flex-col xl:flex-row xl:items-center gap-4">
                <div className="font-semibold gap-2 text-lg flex items-center">
                  <FontAwesomeIcon icon={faLocationDot} />
                  <p>{singleJob.location}</p>
                </div>
                <div className="font-semibold text-lg gap-2 flex items-center">
                  <FontAwesomeIcon icon={faSackDollar} />
                  <p>Salary: {singleJob.salary}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="py-2 mr-0  md:mr-11 rounded-md mb-4 md:mb-0 md:mt-6 w-36 text-center text-white inline-block font-extrabold text-xl bg-gradient-to-r from-blue-500 to-blue-600">
            {" "}
            <Link to={`/jobDetails/${singleJob.id}`}>View Details</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AppliedJob;
