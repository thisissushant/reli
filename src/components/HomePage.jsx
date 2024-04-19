import {} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <div className="flex justify-center">
        <div className="h-12 w-2/3 bg-orange-100 rounded-lg flex justify-end p-3">
          Sushant Singh
          <FontAwesomeIcon icon={faUser} className="h-5 w-5 ml-2" />
        </div>
      </div>
      <div className="flex justify-center mt-24">
        <h1 className=" text-8xl">Reli.ai</h1>
      </div>
      <div className="flex justify-center mt-40">
        <h1 className="font-thin text-6xl">Start</h1>
      </div>
      <div className="flex justify-center mt-2">
        <Link to="chat">
          <button className="hover:text-blue-700">
            <FontAwesomeIcon icon={faArrowRight} className="h-16" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
