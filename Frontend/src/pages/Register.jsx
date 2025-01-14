import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import useAuthStore from "../stores/auth.store.js";

const Register = () => {
  // States and imports
  
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [cover, setCover] = useState(null);
  const {setIsLoading, setErrorMessage, register, errorMessage, isLoading} = useAuthStore();;

  // Logic
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (!email || !password || !name || !username || !avatar) {
      setErrorMessage("Please fill in all the fields.");
      return;
    }
    
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    formData.append("fullName", name);
    formData.append("username", username);
    if(avatar){
      formData.append("avatar", avatar);
    }
    if (cover) {
      formData.append("coverImage", cover);
    }
    register(formData, navigate);
  };

  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="bg-white sm:bg-neutral-50 h-full w-full sm:h-fit sm:w-[400px] rounded-2xl p-6 flex flex-col gap-8 sm:-mt-16">
        <div className="flex flex-col gap-2">
          <p className="poppins-regular text-3xl text-neutral-700">Sign Up</p>
          <div className="text-[12px] poppins-light flex gap-1">
            <p className="text-neutral-500">Already have an account?</p>
            <NavLink to={"/login"} className={"text-emerald-400"}>Sign in</NavLink>
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-5" encType="multipart/form-data">
          <input
            placeholder="Name"
            className="poppins-light text-sm p-2 rounded-md shadow-sm outline-none border-[1px] focus:border-black"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            placeholder="Username"
            className="poppins-light text-sm p-2 rounded-md shadow-sm outline-none border-[1px] focus:border-black"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            placeholder="Email"
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

          <div className="flex items-center gap-2">
            <div className="flex-1">
              <label
                htmlFor="avatar"
                className="flex items-center justify-center w-full p-3 bg-gray-200 text-gray-700 rounded-lg cursor-pointer hover:bg-gray-300 transition"
              >
                Add Profile Picture
              </label>
              <input
                type="file"
                id="avatar"
                className="hidden"
                accept="image/*"
                onChange={(e) => setAvatar(e.target.files[0])}
                required
              />
            </div>
            <div className="flex-1">
              <label
                htmlFor="cover"
                className="flex items-center justify-center w-full p-3 bg-gray-200 text-gray-700 rounded-lg cursor-pointer hover:bg-gray-300 transition"
              >
                Add Cover
              </label>
              <input
                type="file"
                id="cover"
                className="hidden"
                accept="image/*"
                onChange={(e) => setCover(e.target.files[0])}
              />
            </div>
          </div>

          {errorMessage && (
            <div className="text-red-500 text-xs mt-2">
              <p>{errorMessage}</p>
            </div>
          )}

          <button
            type="submit"
            className="w-full p-2 bg-neutral-900 text-white rounded-lg"
            disabled={isLoading}
          >
            {isLoading ? "Registering..." : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
