import { ChatBubbleOutline, FavoriteBorder, PublishOutlined, Repeat, VerifiedUser } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React from "react";
import "./Post.css";

export const Post = () => {
  return (
    <div className="post">
      <div className="post_avatar">
        <Avatar />
      </div>
      <div className="post_body">
        <div className="post_header">
          <div className="post_headerText">
            <h3>Twitterクローン</h3>
            <span className="post_headerSpecial">
              <VerifiedUser className="post_badge" />
              @Hiro_Twitter
            </span>
          </div>
          <div className="post_headerDescription">
            <p>ReactでTwitterのクローン作っているなう。</p>
          </div>
        </div>
        <img src="https://source.unsplash.com/randam" alt="" />
        <div className="post_footer">
          <ChatBubbleOutline fontSize="small" />
          <Repeat fontSize="small" />
          <FavoriteBorder fontSize="small" />
          <PublishOutlined fontSize="small" />
        </div>
      </div>
    </div>
  );
};
