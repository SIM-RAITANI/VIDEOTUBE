import React from "react";
import { NavLink } from "react-router-dom";

const Register = () => {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="bg-white sm:bg-neutral-50 h-full w-full sm:h-fit sm:w-[400px] rounded-2xl p-6 flex flex-col gap-8 sm:-mt-16">
        <div className="flex flex-col gap-2">
          <p className="poppins-regular text-3xl text-neutral-700">Sign Up</p>
          <div className="text-[12px]  poppins-light flex gap-1">
            <p className=" text-neutral-500">Already have an account?</p>
            <NavLink to={"/login"} className={"text-emerald-400"}>
              Sign in
            </NavLink>
          </div>
        </div>
        <input
          placeholder="Name"
          className="poppins-light text-sm p-2 rounded-md shadow-sm outline-none border-[1px] focus:border-black"
        />
        <input
          placeholder="Username"
          className="poppins-light text-sm p-2 rounded-md shadow-sm outline-none border-[1px] focus:border-black"
        />
        <input
          placeholder="email"
          className="poppins-light text-sm p-2 rounded-md shadow-sm outline-none border-[1px] focus:border-black"
        />
        <input
          placeholder="Password"
          className="poppins-light text-sm p-2 rounded-md shadow-sm outline-none border-[1px] focus:border-black"
        />
        <div className="flex items-center gap-2">
          <div className="flex-1">
            <label
              htmlFor="avatar"
              className="flex items-center justify-center w-full  p-3 bg-gray-200 text-gray-700 rounded-lg cursor-pointer hover:bg-gray-300 transition"
            >
              Add Profile Picture
            </label>
            <input type="file" id="avatar" className="hidden" accept="image/*" />
          </div>
          <div className="flex-1">
            <label
              htmlFor="avatar"
              className="flex items-center justify-center w-full  p-3 bg-gray-200 text-gray-700 rounded-lg cursor-pointer hover:bg-gray-300 transition"
            >
              Add Cover 
            </label>
            <input type="file" id="avatar" className="hidden" accept="image/*" />
          </div>
        </div>

        <button className="w-full p-2 bg-neutral-900 text-white rounded-lg">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Register;
