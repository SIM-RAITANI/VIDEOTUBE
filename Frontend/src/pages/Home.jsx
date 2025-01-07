import React from 'react'
import VideoGrid from '../components/VideoGrid'
import Sidebar from '../components/Sidebar'

const Home = () => {
  return (
    <>
    <div className='flex h-[calc(100vh-4rem)] overflow-hidden'>
        <Sidebar/>
        <VideoGrid/>
    </div>
    </>
  )
}

export default Home