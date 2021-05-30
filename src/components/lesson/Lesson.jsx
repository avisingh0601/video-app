import React, { useState } from "react"
import "./lesson.css"
import ResponsivePlayer from "../video/ResponsivePlayer"

const Lesson = () => {
  const [watchComplete, setWatchComplete] = useState(false)
  let count = 0
  const handleWatchComplete = ({ played }) => {
    if (played >= 0.7 && !watchComplete) {
      setWatchComplete(true)
      count++
    }
  }
  return (
    <div>
      <ResponsivePlayer
        url="https://www.youtube.com/watch?v=SS1I7m-G2kk"
        onProgress={handleWatchComplete}
      />
      <div
        className={
          watchComplete
            ? "marker marker--is-complete"
            : "marker marker--not-complete"
        }
      >
        View
      </div>
    </div>
  )
}

export default Lesson
