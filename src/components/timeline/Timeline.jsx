import React, { useEffect, useState } from 'react';
import { Post } from './Post';
import './Timeline.css';
import { TweetBox } from './TweetBox';
import db from '../../firebase';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import FlipMove from 'react-flip-move';

export const Timeline = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const postData = collection(db, 'posts');
    /**並び替え */
    const q = query(postData, orderBy('timestamp', 'desc'));
    /**通常のデータ取得 */
    // getDocs(q).then((querySnapshot) => {
    //   setPosts(querySnapshot.docs.map((doc) => doc.data()));
    // });

    /**リアルタイムでデータ取得 */
    onSnapshot(q, (querySnapshot) => {
      setPosts(querySnapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <div className="timeline">
      {/**Header */}
      <div className="timeline_header">
        <h2>ホーム</h2>
      </div>

      {/**TweetBox */}
      <TweetBox />

      {/**Post */}
      <FlipMove>
        {posts.map((post) => (
          <Post
            /**key 仮置 */
            key={post.text}
            displayName={post.displayName}
            userName={post.userName}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
          />
        ))}
      </FlipMove>
    </div>
  );
};
