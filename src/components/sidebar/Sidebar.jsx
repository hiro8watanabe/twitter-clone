import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOption from './SidebarOption';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button } from '@mui/material';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      {/**ツイッターアイコン*/}
      <TwitterIcon className="sidebar_twitterIcon" />

      {/**sidebarOption*/}
      <SidebarOption icon={<HomeIcon />} text="ホーム" active />
      <SidebarOption icon={<SearchIcon />} text="話題を検索" />
      <SidebarOption icon={<NotificationsNoneIcon />} text="通知" />
      <SidebarOption icon={<MailOutlineIcon />} text="メッセージ" />
      <SidebarOption icon={<BookmarkBorderIcon />} text="ブックマーク" />
      <SidebarOption icon={<ListAltIcon />} text="リスト" />
      <SidebarOption icon={<PermIdentityIcon />} text="プロフィール" />
      <SidebarOption icon={<MoreHorizIcon />} text="もっと見る" />
      {/**ツイートボタン*/}
      <Button variant="outlined" className="sidebar_tweet" fullWidth>
        ツイートする
      </Button>
    </div>
  );
}

export default Sidebar;
