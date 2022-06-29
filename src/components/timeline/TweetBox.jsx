import React, { useState } from 'react';
import { Avatar, Button } from '@mui/material';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import db from '../../firebase';
import './TweetBox.css';

export const TweetBox = () => {
  const [tweetMessage, setTweetMessage] = useState('');
  const [tweetImage, setTweetImage] = useState('');

  const sendTweet = (e) => {
    /**firebaseのデータベースにデータを追加 */
    e.preventDefault();

    addDoc(collection(db, 'posts'), {
      displayName: 'Twitterクローン',
      userName: 'Hiro_Twitter',
      text: tweetMessage,
      avatar: './avatar.png',
      image: tweetImage,
      timestamp: serverTimestamp(),
    });

    setTweetMessage('');
    setTweetImage('');
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox_input">
          <Avatar />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            type="text"
            placeholder="いまどうしてる？"
          />
        </div>
        <input
          onChange={(e) => setTweetImage(e.target.value)}
          value={tweetImage}
          className="tweetBox_imageInput"
          type="text"
          placeholder="画像のURLを入力して下さい"
        />
        <Button
          onClick={sendTweet}
          className="tweetBox_tweetButton"
          type="submit"
        >
          ツイートする
        </Button>
      </form>
    </div>
  );
};
