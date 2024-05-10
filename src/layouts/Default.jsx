import ProTypes from 'prop-types'
import Logo from '../components/logo';
import SearchInput from '../components/SearchInput';
import Button from '../components/Button';
import PlusIcon from '../components/icons/PlusIcon';
import BadgeIcon from '../components/BadgeIcon';
import MessageIcon from '../components/icons/MessageIcon';
import InboxIcon from '../components/icons/InboxIcon';
import Avatar from '../components/Avatar';
import { useState } from 'react';
import BadgeButton from '../components/BadgeButton';
import SideBar from '../components/SideBar';
import FollowAccount from '../components/FollowAccount';
import '../index.css';
import { Link } from 'react-router-dom';
const DefaultLayout = (props) => {
    return(
        <div className='bg-[#121212]'>
            <div className="header flex items-center justify-between bg-[#121212] px-[16px] py-[8px] border-b-1 border-b-gray">
                <div>
                    <Logo></Logo>

                </div>
                <div>
                    <SearchInput suggestionItems={['Tuxedo','Queens of tears']} placeholder="Tìm kiếm"></SearchInput>
                </div>
                <div className='flex items-center justify-between'>
                    <div className='mr-10 '>
                        <Link to="/uploadpage"><Button size='md' prefixIcon={<PlusIcon></PlusIcon>}>Tải lên</Button></Link>
                    </div>
                    <Link to="/messagepage"><BadgeButton icon={<MessageIcon className='text-white'></MessageIcon>} badgeCount={3}></BadgeButton></Link>
                    <Link to="/mailboxespage"><BadgeButton icon={<InboxIcon className='text-white'></InboxIcon>} badgeCount={3}></BadgeButton></Link>
                    <button className='relative mr-5 flex items-center justify-center ' >
                        <Link to="/profilepage"><Avatar imageURL="https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/7e585e9d8285cbfde9a1d0cf14348b90.jpeg?lk3s=a5d48078&x-expires=1714215600&x-signature=BYwIRvnTI4U%2Bu5H%2FRhWf6HEYeps%3D&quot" altText="avatar"></Avatar></Link>

                    </button>
                </div>
            </div>
            <div className="body flex">
                <div className="sidebar w-1/7 bg-[#121212] max-h-screen overflow-auto pr-10 mb-2">
                    <SideBar className='border-b-1 border-b-gray'></SideBar>
                    <div>
                        <div className='text-white mb-5 ml-3 '>Các tài khoản đang follow</div>
                        <div>
                            <FollowAccount></FollowAccount>
                        </div>
                    </div>
                </div>
                <div className="content mx-auto w-2/5">
                    {props.children}
                </div>
            </div>
        </div>
    )
}
// DefaultLayout.protoTypes = {{
//     children: ProTypes.element;
// }}
export default DefaultLayout;