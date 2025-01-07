import React from "react";
import { useSidebarStore } from "../stores/sidebar";
import burger from '../assets/burger.svg'
import {useNavigate} from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate();
  const {controlSidebar} = useSidebarStore();
  return (
    <div className="flex h-16 justify-between items-center px-4 gap-4 sticky top-0 z-10 bg-white">
      <div className="flex items-center gap-2">
        <div className="hidden max-md:block h-6 w-6" onClick={()=>controlSidebar()}>
          <img src={burger} alt="" />
        </div>
        <div className="h-8 w-8 rounded-full bg-slate-700"></div>
      </div>
      <div className="flex-1 max-w-2xl mx-4 max-md:mx-0">
          <input placeholder="Search" className="w-full h-10 border-[1px] border-neutral-300 rounded-full px-4 " />
      </div>

      <div className="items-center gap-2 hidden sm:flex">
        <button className="h-9 w-fit px-4 bg-neutral-200 rounded-md" onClick={()=>navigate('/login')}>Log in</button>
        <button className=" h-9 w-fit px-4 bg-black text-white rounded-md" onClick={()=>navigate('/register')}>Sign up</button>
      </div>
    </div>
  );
};

export default Navbar;
