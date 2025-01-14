import React from "react";
import VideoGrid from "../components/VideoGrid";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 h-[calc(100vh-4rem)] overflow-hidden">
          <VideoGrid />
        </div>
      </div>
    </>
  );
};

export default Home;
