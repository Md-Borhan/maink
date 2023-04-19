import React from "react";
import SocialIcon from "../../assets/Icons/social-icon.png";
import { Line } from "recharts";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#1A1919] py-10 lg:py-32 mt-32 px-4 md:px-10 lg:px-40">
      <div className=" grid sm:grid-cols-2 lg:justify-items-center md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        <div className="mb-6 md:mb-0">
          <h2 className="text-2xl mb-6 text-white font-extrabold">
            The Career Club
          </h2>
          <p className="mb-4">
            There are many variations of passages of Lorem Ipsum , but the
            majority have suffered alteration in some form.
          </p>
          <p>
            <img src={SocialIcon} alt="" />
          </p>
        </div>
        <div className="mb-4 md:mb-0">
          <h3 className="text-xl font-semibold mb-4 text-white">Company</h3>
          <ul>
            <li className="mb-2">
              <Link>About us</Link>
            </li>
            <li className="mb-2">
              <Link>Work</Link>
            </li>
            <li className="mb-2">
              <Link>Latest News</Link>
            </li>
            <li className="mb-2">
              <Link>Careers</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Product</h3>
          <ul>
            <li className="mb-2">
              <Link>Prototype</Link>
            </li>
            <li className="mb-2">
              <Link>Plans & Pricing</Link>
            </li>
            <li className="mb-2">
              <Link>Customers</Link>
            </li>
            <li className="mb-2">
              <Link>Integrations</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Support</h3>
          <ul>
            <li className="mb-2">
              <Link>Help Desk</Link>
            </li>
            <li className="mb-2">
              <Link>Sales</Link>
            </li>
            <li className="mb-2">
              <Link>Become a Partner</Link>
            </li>
            <li className="mb-2">
              <Link>Developers</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Contact</h3>
          <ul>
            <li className="mb-2">
              <Link>524 Broadway , NYC</Link>
            </li>
            <li className="mb-2">
              <Link>+1 777 - 978 - 5570</Link>
            </li>
          </ul>
        </div>
      </div>
      <hr className="border-b my-12 border-[#977CF1]" />
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <p>@2023 CareerHub. All Rights Reserved</p>
        <p className="mt-4 md:mt-0">Powered by TheCareerClub</p>
      </div>
    </div>
  );
};

export default Footer;
