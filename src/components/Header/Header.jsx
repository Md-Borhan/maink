import React, { useState } from "react";
import Button from "../Button/Button";
import ActiveLink from "../ActiveLink/ActiveLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [open, setOpen] = useState(false);
  const handleMenu = () => {
    setOpen(!open);
  };
  return (
    <div className="p-4 lg:p-0 lg:w-5/6 mx-auto">
      <nav className="hidden lg:flex items-center justify-between py-10">
        <ActiveLink to="/">
          <span className="font-extrabold text-[#977CF1] text-3xl">
            TheCareerClub
          </span>
        </ActiveLink>
        <ul className="flex gap-10">
          <li className="hover:text-[#977CF1]">
            <ActiveLink to="/">Home</ActiveLink>
          </li>
          <li className="hover:text-[#977CF1]">
            <ActiveLink to="/statistics">Statistics</ActiveLink>
          </li>
          <li className="hover:text-[#977CF1]">
            <ActiveLink to="/appliedJobs">Applied Jobs</ActiveLink>
          </li>
          <li className="hover:text-[#977CF1]">
            <ActiveLink to="/blog">Blog</ActiveLink>
          </li>
        </ul>
        <Button>Start Applying</Button>
      </nav>

      <div onClick={handleMenu} className=" mb-10 md:mb-16 lg:mb-0">
        <div className="absolute shadow-lg right-8 md:right-28 top-5 border p-3 border-slate-400 rounded-md lg:hidden">
          {open ? (
            <FontAwesomeIcon className="text-xl" icon={faXmark} />
          ) : (
            <FontAwesomeIcon className="text-xl" icon={faBars} />
          )}
        </div>
        {open && (
          <nav className=" rounded-md p-5 shadow-lg">
            <ActiveLink to="/">
              <span className="font-extrabold text-[#977CF1] text-xl sm:text-3xl">
                TheCareerClub
              </span>
            </ActiveLink>
            <ul className="mt-3 space-y-2">
              <li>
                <ActiveLink to="/">Home</ActiveLink>
              </li>
              <li>
                <ActiveLink to="/statistics">Statistics</ActiveLink>
              </li>
              <li>
                <ActiveLink to="/appliedJobs">Applied Jobs</ActiveLink>
              </li>
              <li>
                <ActiveLink to="/blog">Blog</ActiveLink>
              </li>
            </ul>
            <Button>Start Applying</Button>
          </nav>
        )}
      </div>
    </div>
  );
};

export default Header;
