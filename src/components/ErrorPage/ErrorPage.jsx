import React from "react";
import { useNavigate, useRouteError } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSadTear } from "@fortawesome/free-solid-svg-icons";
import Button from "../Button/Button";

const ErrorPage = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  const error = useRouteError();
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="font-bold text-slate-900 text-7xl">Oops!</h1>
      <FontAwesomeIcon
        className="text-7xl mt-8 mb-4 text-black"
        icon={faFaceSadTear}
      />
      <p className="text-2xl text-slate-900">
        Sorry, an unexpected error has occurred.
      </p>
      <p className="text-2xl font-bold text-slate-900">
        <i>{error.statusText || error.message}</i>
      </p>
      <span className="mt-4" onClick={handleGoBack}>
        <Button>Go Back</Button>
      </span>
    </div>
  );
};

export default ErrorPage;
