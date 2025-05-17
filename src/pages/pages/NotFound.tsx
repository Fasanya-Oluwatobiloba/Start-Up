import { useState } from "react";
import NavAuth from "../../components/NavAuth";
import { useNavigate } from "react-router";

const NotFound = () => {
    const [sign, isSign] = useState(true)
    const navigate = useNavigate()
  return (
    <div className="flex transition-all duration-150 items-center overflowy-hidden py-4 justify-center min-h-screen flex-wrap gap-5 dark:bg-[#141414] bg-white">
        <NavAuth call={sign} set={isSign}/>
        <div className="w-full flex justify-center items-center flex-wrap max-w-lg h-[85vh] relative bottom-2 py-7 sm:px-8 px-4 rounded-lg raleway ">
        <div className=" glass h-80 p-5">
            <h2 className="text-4xl h-20 text-center font-normal dark:text-white text-indigo-900">
              OOPS Page Not Found
            </h2>
            <div className="flex flex-wrap justify-center">
                <div className="flex w-8 h-8 justify-center my-5 rounded-md items-center bg-indigo-600">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M440-800v487L216-537l-56 57 320 320 320-320-56-57-224 224v-487h-80Z"/></svg>
                </div>
                <div className="w-full flex justify-center items-center">
                    <button type="button" className="btn" onClick={()=>navigate("/home")}>
                        <strong> Go Back To HomePage </strong>
                        <div id="container-stars">
                            <div id="stars"></div>
                        </div>
                        <div id="glow">
                            <div className="circle"></div>
                            <div className="circle"></div>
                        </div>
                    </button>
                </div>
            </div>
        </div>
        </div>
    </div>
  );
}

export default NotFound;
