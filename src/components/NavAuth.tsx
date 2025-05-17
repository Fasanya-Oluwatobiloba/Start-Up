import { NavLink } from "react-router";
import Themes from "./Themes";
import { FC } from "react";

interface NavAuthProps {
  call: boolean;
  set: (param: boolean) => void; 
}

const NavAuth: FC<NavAuthProps> = ({ call, set }) => { 
  return (
    <div className="w-[99%] mt-1 h-20 flex justify-between glass">
      <div className="w-auto h-auto px-2 py-2">
        <img 
          src="src/assets/start.png"
          alt="Logo" 
          className="w-20" 
        />
      </div>
      <div className="flex justify-center items-center gap-4 px-3">
        {call ? (
          <p className="font-normal text-sm raleway dark:text-white">
            Already have an account?{" "}
            <NavLink 
              to="/login" 
              onClick={() => set(false)} 
              className="text-blue-500"
            >
              Sign In
            </NavLink>
          </p>
        ) : (
          <p className="font-normal text-sm raleway dark:text-white">
            New to Start-Up?{' '}
            <NavLink 
              to="/" 
              onClick={() => set(true)} 
              className="text-blue-500"
            >
              SignUp
            </NavLink>
          </p>
        )}
        <div className="flex justify-center items-center rounded-md w-auto h-auto">
          <Themes />
        </div>
      </div>
    </div>
  );
}

export default NavAuth;
