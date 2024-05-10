import HomeIcon from './icons/HomeIcon';
import MenuItems from './MenuItems';
import FollowIcon from './icons/FollowIcon';
import FriendsIcon from './icons/FriendsIcon';
import DiscoverIcon from './icons/DiscoverIcon';
import LiveIcon from './icons/LiveIcon';
import FollowItems from './FollowItems';
import { Link } from 'react-router-dom';

const SideBar = () => {
    return (
        <ul>
            <MenuItems icon={<HomeIcon></HomeIcon>} title='Dành cho bạn'></MenuItems>
            <Link to="/followingpage"><MenuItems icon={<FollowIcon></FollowIcon>} title='Đang Follow'></MenuItems></Link>
            <Link to="/friendspage"><MenuItems icon={<FriendsIcon></FriendsIcon>} title='Bạn bè'></MenuItems></Link>
            <Link to="/discoverpage"><MenuItems icon={<DiscoverIcon></DiscoverIcon>} title='Khám phá'></MenuItems></Link>
            <Link to="/livepage"><MenuItems icon={<LiveIcon></LiveIcon>} title='LIVE'></MenuItems></Link>
            <Link to="/profilepage"><FollowItems avatarURL='https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/7e585e9d8285cbfde9a1d0cf14348b90.jpeg?lk3s=a5d48078&x-expires=1714215600&x-signature=BYwIRvnTI4U%2Bu5H%2FRhWf6HEYeps%3D&quot' name='Hoàng Lâm'></FollowItems></Link>
        </ul>
    )
}

export default SideBar;