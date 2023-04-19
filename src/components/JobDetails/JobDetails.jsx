import { useLoaderData, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

import {
  faSackDollar,
  faCreditCard,
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import Button from "../Button/Button";
import toast, { Toaster } from "react-hot-toast";

const JobDetails = () => {
  const jobDetailsId = useParams();
  const loadJobDetails = useLoaderData()?.features;
  const jobId = jobDetailsId?.id;
  const [jobDetail, setJobDetails] = useState({});

  const handleApply = (jobDetail) => {
    const getDataFromStorage = JSON.parse(localStorage.getItem("addJobData"));
    const jobDetailsData = [];
    if (getDataFromStorage) {
      const isJobDetails = getDataFromStorage.find(
        (sj) => sj.id == jobDetail.id
      );
      if (isJobDetails) {
      } else {
        jobDetailsData.push(...getDataFromStorage, jobDetail);
        localStorage.setItem("addJobData", JSON.stringify(jobDetailsData));
      }
    } else {
      jobDetailsData.push(jobDetail);
      localStorage.setItem("addJobData", JSON.stringify(jobDetailsData));
    }
    toast.success("Job Applied.", { duration: 3000, position: "top-center" });
  };

  useEffect(() => {
    const existJobId = loadJobDetails?.find((sd) => sd?.id == jobId);
    setJobDetails(existJobId);
  }, []);
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
  } = jobDetail;

  return (
    <>
      {/*Job Details Section  */}
      <section className="">
        <h2 className="text-[#1A1919] text-center font-extrabold mt-16 lg:mt-0 text-3xl pb-8">
          Job Details
        </h2>
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <p className="leading-8 mb-6">
              <span className="font-extrabold text-[#1A1919]">
                Job Description:
              </span>{" "}
              {job_description}
            </p>
            <p className="leading-8 mb-6">
              <span className="font-extrabold text-[#1A1919]">
                Job Responsibility:
              </span>{" "}
              {job_responsibility}
            </p>
            <p className="font-extrabold text-[#1A1919]">
              Educational Requirements:
            </p>{" "}
            <p className="leading-8 mb-6">{educationalRequirements}</p>
            <p className="font-extrabold text-[#1A1919]">Experiences:</p>{" "}
            <p className="leading-8 mb-6">{experiences}</p>
          </div>
          <div>
            <div className="bg-[#F4F1FF] rounded-lg p-7 mb-5">
              <div>
                <p className="text-xl font-extrabold text-[#1A1919] mb-6 ">
                  Job Details
                </p>
                <hr className="border-b-1  border-[#977cf133]" />
                <div className="mb-4">
                  <p className="mt-6">
                    <FontAwesomeIcon icon={faSackDollar} />
                    <span className="text-xl text-[#474747] ml-2 font-extrabold">
                      Salary:{" "}
                    </span>
                    {salary} (Per Month)
                  </p>
                </div>{" "}
                <div>
                  <p className="mt-6">
                    <FontAwesomeIcon icon={faCreditCard} />
                    <span className="text-xl text-[#474747] ml-2 font-extrabold">
                      Job Title:{" "}
                    </span>
                    {title}
                  </p>
                </div>
              </div>{" "}
              <div>
                <p className="text-xl font-extrabold text-[#1A1919] mb-6 mt-7">
                  Contact Information
                </p>
                <hr className="border-b-1  border-[#977cf133]" />
                <div className="mb-4">
                  <p className="mt-6">
                    <FontAwesomeIcon icon={faPhone} />
                    <span className="text-xl text-[#474747] ml-2 font-extrabold">
                      Phone:{" "}
                    </span>
                    {contactInformation?.phone}
                  </p>
                </div>{" "}
                <div>
                  <p className="mt-6">
                    <FontAwesomeIcon icon={faEnvelope} />
                    <span className="text-xl text-[#474747] ml-2 font-extrabold">
                      Email:{" "}
                    </span>
                    {contactInformation?.email}
                  </p>
                </div>
                <div>
                  <p className="mt-6">
                    <FontAwesomeIcon icon={faLocationDot} />
                    <span className="text-xl text-[#474747] ml-2 font-extrabold">
                      Address:{" "}
                    </span>
                    {location}
                  </p>
                </div>
              </div>
            </div>
            <div onClick={() => handleApply(jobDetail)} className="w-full">
              <Button>Apply Now</Button>
            </div>
          </div>
        </div>
        <Toaster />
      </section>
    </>
  );
};

export default JobDetails;
