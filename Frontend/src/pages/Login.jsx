import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { use } from "react";
import useUserStore from "../stores/user.store.js";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const backendUrl = useUserStore((state) => state.backendUrl);
  console.log(backendUrl);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);
    const userData = {
      email: email,
      password: password,
    };
    try {
      const { data } = await axios.post(`${backendUrl}/users/login`, userData);
      console.log("user data after login request: ", data.success);
      console.log(data.success);
      
      if (data.success) {
        navigate("/");
        console.log("User logged in successfully");
      } else {
        alert("Invalid username or password");
      }

      setEmail("");
      setPassword("");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="h-screen w-full flex items-center justify-center ">
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          placeholder="Password"
          className="poppins-light text-sm p-2 rounded-md shadow-sm outline-none border-[1px] focus:border-black"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          onClick={(e) => handleSubmit(e)}
          className="w-full p-2 bg-neutral-900 text-white rounded-lg"
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Login;
