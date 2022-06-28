import React from "react";
import { Post } from "./Post";
import "./Timeline.css";
import { TweetBox } from "./TweetBox";

function Timeline() {
  return (
    <div className="timeline">
      {/**Header */}
      <div className="timeline_header">
        <h2>ホーム</h2>
      </div>

      {/**TweetBox */}
      <TweetBox />

      {/**Post */}
      <Post />
    </div>
  );
}

export default Timeline;