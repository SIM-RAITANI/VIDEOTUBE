import { Link } from "react-router-dom";
import {
  Home,
  ThumbsUp,
  History,
  Film,
  FolderOpen,
  Users,
  HelpCircle,
  Settings,
  X,
} from "lucide-react";
import { useState } from "react";
import { useSidebarStore } from "../stores/sidebar";
const navItems = [
  { icon: Home, label: "Home", href: "/" },
  { icon: ThumbsUp, label: "Liked Videos", href: "/liked" },
  { icon: History, label: "History", href: "/history" },
  { icon: Film, label: "My Content", href: "/content" },
  { icon: FolderOpen, label: "Collections", href: "/collections" },
  { icon: Users, label: "Subscribers", href: "/subscribers" },
  { icon: HelpCircle, label: "Support", href: "/support" },
  { icon: Settings, label: "Settings", href: "/settings" },
];

export default function Sidebar({ onClose }) {
  const { sidebarToggle} = useSidebarStore();
  return (
    <aside className={`w-60 border-r duration-300 bg-white min-h-[calc(100vh-4rem)] ${sidebarToggle? 'max-md:absolute max-md:z-10 px-4': 'max-md:w-0 max-md:absolute max-md:z-10'}`}>
      <nav className={`p-4 space-y-2 ${sidebarToggle? '': 'max-md:hidden'}`}>
        {navItems.map((item) => (
          <Link key={item.href} to={item.href} onClick={onClose}>
            <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-200">
              <item.icon className="h-5 w-5 text-gray-700" />
              <span className="text-gray-800 font-medium">{item.label}</span>
            </div>
          </Link>
        ))}
      </nav>
      {
        sidebarToggle?
        <div className="md:hidden">

            <button className="h-9 w-full px-4 mb-4 bg-neutral-200 rounded-md">Log in</button>
            <button className=" h-9 w-full px-4 bg-black text-white rounded-md">Sign up</button>        
        </div>
        :<></>
      }
      
    </aside>
  );
}
