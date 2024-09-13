import LockIcon from '../components/icons/LockIcon';
import FollowUserIcon from '../components/icons/FollowUserIcon';
import Avatar from './Avatar';
import profile from '../data/profile';
import Button from './Button';
import VideoUserPost from './VideoUserPost';
import numeral from 'numeral';

const ProfileDescription = (props) => {
    return (
        <div className='w-full bg-black'>
            <div className="w-1/3 flex justify-between pb-5 ml-[270px] pt-10">
                <div>
                    <div className='flex'>
                        <div><Avatar size='avatarProfile' imageURL={profile.avatar}></Avatar></div>
                        <div className='pl-4'>
                            <div className='text-white text-[30px]'><b>{profile.username}</b></div>
                            <div className='text-white text-[18px]'><b>{profile.nameTitle}</b></div>
                            <div className='flex mt-5'>
                                <div><Button wrapperClass="w-[150px] h-9 flex justify-center items-center border border-solid border-[#ff3b5c] text-[#ff3b5c] font-bold mr-5">Tin nhắn</Button></div>
                                <div><Button wrapperClass='w-9 h-9 flex justify-center items-center rounded-[10px] px-[9px]'><FollowUserIcon></FollowUserIcon></Button></div>
                            </div>
                        </div>
                    </div>
                    <div className='flex pt-5 text-[18px]'>
                        <div className='text-white pr-5'><b>{numeral(profile.following).format('0a')}</b> <span className='text-gray-300'>Đang follow</span></div>
                        <div className='text-white pr-5'><b>{numeral(profile.follower).format('0.0a')}</b> <span className='text-gray-300'>Follower</span></div>
                        <div className='text-white pr-5'><b>{numeral(profile.like).format('0.0a')}</b> <span className='text-gray-300'>Thích</span></div>
                    </div>
                    <div className='text-white text-[17px] pt-3'>
                        {profile.description}
                    </div>
                </div>
                <div className='flex '>
                    <div className='text-white pr-6'><svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 256 256" {...props}><path fill="currentColor" d="m237.66 106.35l-80-80A8 8 0 0 0 144 32v40.35c-25.94 2.22-54.59 14.92-78.16 34.91c-28.38 24.08-46.05 55.11-49.76 87.37a12 12 0 0 0 20.68 9.58c11-11.71 50.14-48.74 107.24-52V192a8 8 0 0 0 13.66 5.65l80-80a8 8 0 0 0 0-11.3M160 172.69V144a8 8 0 0 0-8-8c-28.08 0-55.43 7.33-81.29 21.8a196.17 196.17 0 0 0-36.57 26.52c5.8-23.84 20.42-46.51 42.05-64.86C99.41 99.77 127.75 88 152 88a8 8 0 0 0 8-8V51.32L220.69 112Z"></path></svg></div>
                    <div className='text-white'><svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M12 14a2 2 0 1 0 0-4a2 2 0 0 0 0 4m-6 0a2 2 0 1 0 0-4a2 2 0 0 0 0 4m12 0a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></path></svg></div>
                </div>
            </div>
            <div className='w-6/7 ml-[260px]'>
                <div className='w-full bg-[#121212] flex items-center '>
                    <div className='text-white '><button className='button-hover-effect hover:border-b-2 border-white pt-4 pb-4 pl-10 pr-7'><b>Video</b></button></div>
                    <div className='text-white '><button className='flex items-center button-hover-effect hover:border-b-2 border-white pt-4 pb-4 pl-7 pr-7 '><LockIcon></LockIcon> <b className='pl-2'>Đã thích</b></button></div>
                </div>
                <div className='text-white pt-5 flex flex-wrap w-full'>
                    {profile.videoList.map((video,index) => (
                        <VideoUserPost key={index} videoId={video.id} title={video.title}></VideoUserPost>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProfileDescription;