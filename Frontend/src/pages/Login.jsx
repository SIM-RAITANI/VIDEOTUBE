import React from "react";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="bg-white sm:bg-neutral-50 h-full w-full sm:h-fit sm:w-[400px] rounded-2xl p-6 flex flex-col gap-8 sm:-mt-16">
        <div className="flex flex-col gap-2">
          <p className="poppins-regular text-3xl text-neutral-700">Sign In</p>
          <div className="text-[12px] poppins-light flex gap-1">
            <p className=" text-neutral-500">Don't have an account yet?</p>
            <NavLink to={"/register"} className={"text-emerald-400"}>
              Sign Up
            </NavLink>
          </div>
        </div>
        <input
          placeholder="Your email / username"
          className="poppins-light text-sm p-2 rounded-md shadow-sm outline-none border-[1px] focus:border-black"
          
        />
        <input
          placeholder="Password"
          className="poppins-light text-sm p-2 rounded-md shadow-sm outline-none border-[1px] focus:border-black"
          type="password"
         
        />
        <button
          className="w-full p-2 bg-neutral-900 text-white rounded-lg"
         
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Login;
