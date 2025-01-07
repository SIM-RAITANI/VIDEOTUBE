import React from 'react'
import Thumbnail from './Thumbnail'
const videos = [
    {
      id: 1,
      title: "JavaScript Fundamentals: Variables and Data Types",
      thumbnail: "https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      duration: "20:45",
      views: "10.3k",
      uploadedAt: new Date(Date.now() - 44 * 60 * 1000),
      channel: "Code Master"
    },
    {
      id: 2,
      title: "Getting Started with Express.js",
      thumbnail: "https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      duration: "22:18",
      views: "11.k",
      uploadedAt: new Date(Date.now() - 5 * 60 * 60 * 1000),
      channel: "Express Learner"
    },
    {
      id: 3,
      title: "Building a RESTful API with Node.js and Express",
      thumbnail: "https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      duration: "24:33",
      views: "14.5k",
      uploadedAt: new Date(Date.now() - 7 * 60 * 60 * 1000),
      channel: "API Builder"
    },
    {
      id: 4,
      title: "Building a RESTful API with Node.js and Express",
      thumbnail: "https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      duration: "24:33",
      views: "14.5k",
      uploadedAt: new Date(Date.now() - 7 * 60 * 60 * 1000),
      channel: "API Builder"
    },
    {
      id: 5,
      title: "Building a RESTful API with Node.js and Express",
      thumbnail: "https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      duration: "24:33",
      views: "14.5k",
      uploadedAt: new Date(Date.now() - 7 * 60 * 60 * 1000),
      channel: "API Builder"
    },
    {
      id: 6,
      title: "Building a RESTful API with Node.js and Express",
      thumbnail: "https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      duration: "24:33",
      views: "14.5k",
      uploadedAt: new Date(Date.now() - 7 * 60 * 60 * 1000),
      channel: "API Builder"
    },
    {
      id: 7,
      title: "Building a RESTful API with Node.js and Express",
      thumbnail: "https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      duration: "24:33",
      views: "14.5k",
      uploadedAt: new Date(Date.now() - 7 * 60 * 60 * 1000),
      channel: "API Builder"
    },
    {
      id: 8,
      title: "Building a RESTful API with Node.js and Express",
      thumbnail: "https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      duration: "24:33",
      views: "14.5k",
      uploadedAt: new Date(Date.now() - 7 * 60 * 60 * 1000),
      channel: "API Builder"
    },
  ]

const VideoGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 flex-1 p-4 overflow-y-auto">
         {
            videos.map((video)=>(
                <div key={video.id}>
                    <Thumbnail video={video}/>
                </div>
            ))
         }
    </div>
  )
}

export default VideoGrid