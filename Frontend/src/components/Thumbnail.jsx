import React from 'react'
import { formatDistanceToNow } from "date-fns"
import { NavLink } from 'react-router-dom'

const Thumbnail = ({video}) => {
  return (
    <>
    <NavLink to={`/video/${video.id}`}>
        <div className="group cursor-pointer h-fit">
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="object-cover"
                />
              <div className="absolute bottom-2 right-2 bg-black/80 px-1 rounded text-xs text-white">
                {video.duration}
              </div>
            </div>
            <div className="mt-2">
              <h3 className="font-semibold line-clamp-2 group-hover:text-primary">
                {video.title}
              </h3>
              <p className="text-sm text-muted-foreground">{video.channel}</p>
              <div className="text-sm text-muted-foreground">
                {video.views} Views · {formatDistanceToNow(video.uploadedAt, { addSuffix: true })}
              </div>
            </div>
          </div>
    </NavLink>
    </>
  )
}

export default Thumbnail