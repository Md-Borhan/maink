import Button from "../Button/Button";
import BannerImg from "../../assets/All Images/person.png";
import Title from "../Title/Title";
import { useLoaderData } from "react-router-dom";
import JobCategoryList from "../JobCategoryList/JobCategoryList";
import Feature from "../Feature/Feature";
import { useState } from "react";

const Home = () => {
  const jobCategoryes = useLoaderData().categoryData.jobCategorys;
  const features = useLoaderData().featuresData.features;
  const [showAll, setShowAll] = useState(false);
  const handleAllJobs = () => {
    setShowAll(true);
  };
  return (
    <div className="">
      {/* Hero Section */}
      <section className="flex flex-col-reverse lg:flex-row items-center justify-center gap-6 md:gap-8 lg:gap-16">
        <div>
          <h1 className="font-extrabold text-4xl md:text-5xl lg:text-7xl mb-4 leading-[1.20] text-[#1A1919]">
            One Step Closer To Your <br />
            <span className="text-[#977CF1]">Dream Job</span>
          </h1>
          <p className="text-lg lg:mb-8">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <Button>Get Started</Button>
        </div>
        <div className="">
          <img src={BannerImg} alt="Banner Img" />
        </div>
      </section>

      {/* Job Category Section */}
      <section>
        <Title>Job Category List</Title>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {jobCategoryes.map((jobCategorye, idx) => (
            <JobCategoryList
              key={idx}
              jobCategorye={jobCategorye}
            ></JobCategoryList>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section>
        <Title>Features Jobs</Title>
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
          {features?.slice(0, showAll ? 6 : 4).map((feature) => (
            <Feature key={feature.id} feature={feature}></Feature>
          ))}
        </div>
        <div className="text-center mt-10">
          {!showAll && (
            <span className="inline-block" onClick={handleAllJobs}>
              <Button>See All Jobs</Button>
            </span>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;
