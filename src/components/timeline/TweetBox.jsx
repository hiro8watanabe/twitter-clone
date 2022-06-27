import { Avatar, Button } from "@mui/material";
import React from "react";
import "./TweetBox.css";

export const TweetBox = () => {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox_input">
          <Avatar />
          <input type="text" placeholder="いまどうしてる？" />
        </div>
        <input className="tweetBox_imageInput" type="text" placeholder="画像のURLを入力して下さい" />
        <Button className="tweetBox_tweetButton" type="submit">
          ツイートする
        </Button>
      </form>
    </div>
  );
};
