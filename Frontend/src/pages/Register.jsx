// import React from "react";
// import { NavLink } from "react-router-dom";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { use } from "react";
// import useUserStore from "../stores/user.store.js";
// import axios from "axios";

// const Register = () => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [name, setName] = useState("");
//   const [username, setUsername] = useState("");
//   const [avatar, setAvatar] = useState(null);
//   const [cover, setCover] = useState(null);
//   const backendUrl = useUserStore((state) => state.backendUrl);
  
  
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log(email, password,name,username);
//     const formData = new FormData();
//     formData.append("email", email);
//     formData.append("password", password);
//     formData.append("name", name);
//     formData.append("username", username);
//     formData.append("avatar", avatar);
//     if (cover) {
//       formData.append("coverImage", cover);
//     }
//     console.log("form data: ", formData);
    
//     try {
//       const { data } = await axios.post(`${backendUrl}/users/register`, formData, {
//         headers: {
//           "Content-Type": "multipart/form-data"
//         }
//       });
//       console.log("user data after register request: ", data);
      
//       if (data.success) {
//         navigate("/");
//         console.log("User registered successfully");
//       } else {
//         alert("Registration failed");
//       }
//     } catch (error) {
//       console.error("Error during registration request:", error);
//       alert("An error occurred during registration. Please try again.");
//     }
//   };




//   return (
//     <div className="h-full w-full flex items-center justify-center">
//       <div className="bg-white sm:bg-neutral-50 h-full w-full sm:h-fit sm:w-[400px] rounded-2xl p-6 flex flex-col gap-8 sm:-mt-16">
//         <div className="flex flex-col gap-2">
//           <p className="poppins-regular text-3xl text-neutral-700">Sign Up</p>
//           <div className="text-[12px]  poppins-light flex gap-1">
//             <p className=" text-neutral-500">Already have an account?</p>
//             <NavLink to={"/login"} className={"text-emerald-400"}>
//               Sign in
//             </NavLink>
//           </div>
//         </div>
//         <input
//           placeholder="Name"
//           className="poppins-light text-sm p-2 rounded-md shadow-sm outline-none border-[1px] focus:border-black"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//         />
//         <input
//           placeholder="Username"
//           className="poppins-light text-sm p-2 rounded-md shadow-sm outline-none border-[1px] focus:border-black"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           required
//         />
//         <input
//           placeholder="Email"
//           className="poppins-light text-sm p-2 rounded-md shadow-sm outline-none border-[1px] focus:border-black"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <input
//           placeholder="Password"
//           className="poppins-light text-sm p-2 rounded-md shadow-sm outline-none border-[1px] focus:border-black"
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <div className="flex items-center gap-2">
//           <div className="flex-1">
//             <label
//               htmlFor="avatar"
//               className="flex items-center justify-center w-full  p-3 bg-gray-200 text-gray-700 rounded-lg cursor-pointer hover:bg-gray-300 transition"
//             >
//               Add Profile Picture
//             </label>
//             <input type="file" id="avatar" className="hidden" accept="image/*" 
//             onChange={(e)=> setAvatar(e.target.files[0])}
            
//             />
//           </div>
//           <div className="flex-1">
//             <label
//               htmlFor="cover"
//               className="flex items-center justify-center w-full  p-3 bg-gray-200 text-gray-700 rounded-lg cursor-pointer hover:bg-gray-300 transition"
//             >
//               Add Cover 
//             </label>
//             <input type="file" id="cover" className="hidden" accept="image/*" onChange={(e)=> setCover(e.target.files[0])} />
//           </div>
//         </div>

//         <button className="w-full p-2 bg-neutral-900 text-white rounded-lg" onClick={ (e) => handleSubmit(e)}>
//           Sign Up
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Register;



import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useUserStore from "../stores/user.store.js";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [cover, setCover] = useState(null);
  const backendUrl = useUserStore((state) => state.backendUrl);
  const [errorMessage, setErrorMessage] = useState(""); // State for error messages
  const [isLoading, setIsLoading] = useState(false); // Loading state
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(""); // Reset error message

    if (!email || !password || !name || !username || !avatar) {
      setErrorMessage("Please fill in all the fields.");
      return;
    }
    console.log(avatar);
    
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    formData.append("fullName", name);
    formData.append("username", username);
    formData.append("avatar", avatar);
    if (cover) {
      formData.append("coverImage", cover);
    }

    try {
      setIsLoading(true); // Set loading to true during the request
      const { data } = await axios.post(`${backendUrl}/users/register`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("successful request");
      
      
      if (data.success) {
        navigate("/"); // Redirect to home on success
        console.log("User registered successfully");
      } else {
        setErrorMessage(data.message || "Registration failed");
      }
    } catch (error) {
      console.error("Error during registration request:", error);
      setErrorMessage("An error occurred during registration. Please try again.");
    } finally {
      setIsLoading(false); // Reset loading state after the request is complete
    }
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
