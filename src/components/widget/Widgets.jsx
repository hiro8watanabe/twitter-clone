import React from "react";
import Search from "@mui/icons-material/Search";
import { TwitterShareButton, TwitterTimelineEmbed, TwitterTweetEmbed } from "react-twitter-embed";

export const Widgets = () => {
  return (
    <div className="widgets">
      <div className="widgets_input">
        <Search className="widgets_searchIcon" />
        <input type="text" placeholder="キーワード検索" />
      </div>
      <div className="widgets_widgetContainer">
        <h2>いまどうしてる？</h2>
        {/**ライブラリを追加 */}
        <TwitterTweetEmbed tweetId={"1508838714180612100"} />
        <TwitterTimelineEmbed sourceType="profile" screenName="reactjs" options={{ height: 400 }} />
        <TwitterShareButton url={"https://twitter.com/reactjs"} options={{ text: "#reactjs is test", via: "reactjs-test" }} />
      </div>
    </div>
  );
};
