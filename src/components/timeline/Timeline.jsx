import React from 'react';
import { Post } from './Post';
import './Timeline.css';
import { TweetBox } from './TweetBox';

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
      <Post
        displayName="Twitterクローン"
        userName="@Hiro_Twitter"
        text="初回ツイート"
        avatar="https://shincode.info/wp-content/uplosds/2021/12/icon.png"
        image="https://source.unsplash.com/randam"
      />
    </div>
  );
}

export default Timeline;
