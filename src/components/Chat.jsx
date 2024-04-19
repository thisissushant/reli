import {} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Chat = () => {
  return (
    <div>
      <div className="md:text-5xl text-4xl hover:text-blue-700 flex justify-center md:justify-start">
        <Link to="/">Reli.ai</Link>
      </div>
      <div className="grid grid-cols-8 gap-10 h-screen mt-5 ">
        <div className="md:col-start-1 md:col-end-3 md:rounded-lg md:bg-slate-500 relative  ">
          <h1 className="text-2xl text-gray-300 m-2">Recent Search...</h1>
          <div className="md:h-12 md:w-64 md:bg-orange-100 md:rounded-lg md:p-3 md:absolute md:bottom-2 md:ml-5 ">
            <FontAwesomeIcon icon={faUser} className="md:h-5 md:w-5 md:mr-2 " />
            Sushant Singh
          </div>
        </div>
        <div className="md:col-start-3 md:col-end-8  rounded-2xl bg-slate-200 relative">
          <div className="flex justify-center ">
            <input
              className="h-10 md:w-96 bg-white rounded-xl absolute bottom-3"
              placeholder=" Search here..."
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;

{
  /* <div className="grid grid-flow-row-dense grid-cols-3 ">
      <div className="">
        <div className="text-5xl hover:text-blue-700 grid place-items-center">
          <Link to="/">Reli.ai</Link>
        </div>
        <div className="md:flex md:justify-start hidden md:relative">
          <div className="h-screen md:w-72 bg-gray-400 md:rounded-lg md:mt-4 md:flex md:justify-center">
            <div className=" md:absolute bottom-4 left-4">
              <div className="h-12 w-64 bg-orange-100 rounded-lg p-3">
                <FontAwesomeIcon icon={faUser} className="h-5 w-5" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-700 col-span-2 m-2 min-h-1.5 max-w-2xl rounded-lg flex relative ">
        <div>
          <input
            className="h-10 md:w-96 w-56 bg-slate-300 absolute bottom-3 md:ml-36  rounded-lg border-none"
            placeholder=" Ask anything..."
          ></input>
        </div>
      </div>
    </div> */
}
