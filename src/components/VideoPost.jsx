import PropTypes from 'prop-types'
import Avatar from "./Avatar";
import Button from "./Button";
import HeartIcon from './icons/HeartIcon';
import CommentIcon from './icons/CommentIcon';
import ShareIcon from './icons/ShareIcon';
import FollowIcon from './icons/FollowIcon';
import MenuItems from './MenuItems';
import EmbeddedIcon from './icons/EmbeddedIcon';
import FacebookIcon from './icons/FacebookIcon';
import WhatsAppIcon from './icons/WhatsAppIcon';
import LinkIcon from './icons/LinkIcon';
import InboxIcon from './icons/InboxIcon';
import { Link } from 'react-router-dom';
import '../index.css';
import { useEffect, useRef, useState } from 'react';
const VideoPost = ({ video }) => {
    const [isVisible, setIsVisible] = useState(false)
    const containerRef = useRef(null)
    const videoRef = useRef(null)

    useEffect(() => {
        if (containerRef.current) {
            const observer = new IntersectionObserver((entries) => {
                const [entry] = entries
                setIsVisible(entry.isIntersecting)
            }, {
                rootMargin: '0px',
                threshold: 0.5,
            })
            observer.observe(containerRef.current)
        }
    }, [video.id])

    useEffect(() => {
        if (videoRef.current) {
            if (isVisible) {
                videoRef.current.play()
            } else {
                videoRef.current.pause()
            }
        }
    }, [isVisible])

    return (
        <div ref={containerRef} className="flex justify-between gap-5">
            <div className="flex items-start">
                <div className="avatar">
                    <Avatar size="lg" imageURL={video.author.avatar}></Avatar>
                </div>
                <div className="pl-3 flex-1">
                    <div>
                        <div className='font-bold text-white pr-3 text-[19px]'>{video.author.name}</div>
                    </div>
                    <div className='text-white'>
                        {video.description}
                    </div>
                    <div className='flex items-end mt-5 gap-4'>
                        <Link to={`/video/${video.id}`}>
                            <video ref={videoRef} className='w-[378px] h-[675px] bg-black rounded-md object-cover' width="270px" height="490px" controls>
                                <source src={video.src} type='video/mp4' />
                            </video>
                        </Link>
                        <div className='flex flex-col items-center gap-5'>
                            <div className='flex flex-col items-center gap-2'>
                                <Button wrapperClass="rounded-full h-[48px] w-[48px]" prefixIcon={<HeartIcon className="text-[20px]" />}></Button>
                                {/* <p className='text-white text-[13px]'>{video.summary.likes}</p> */}
                            </div>
                            <div className='flex flex-col items-center gap-2'>
                                <Button wrapperClass="rounded-full h-[48px] w-[48px]" prefixIcon={<CommentIcon></CommentIcon>}></Button>
                                {/* <p className='text-white text-[13px]'>{video.summary.comments}</p> */}
                            </div>
                            <div className='flex flex-col items-center gap-2'>
                                <div className='popup-wrapper relative'>
                                    <Button wrapperClass="rounded-full h-[48px] w-[48px]" prefixIcon={<ShareIcon></ShareIcon>}></Button>
                                    <div className='popup-content absolute -top-[310px] -left-[10px] bg-white p-2 rounded-[10px] border border-gray-300 hidden w-[280px]' id='popup'>
                                        <ul className='w-full'>
                                            <MenuItems wrapperClass='text-black' icon={<EmbeddedIcon></EmbeddedIcon>} title='Nhúng'></MenuItems>
                                            <MenuItems wrapperClass='text-black' icon={<InboxIcon></InboxIcon>} title='Gửi đến bạn bè'></MenuItems>
                                            <MenuItems wrapperClass='text-black' icon={<FacebookIcon></FacebookIcon>} title='Chia sẻ với Facebook'></MenuItems>
                                            <MenuItems wrapperClass='text-black' icon={<WhatsAppIcon></WhatsAppIcon>} title='Chia sẻ với WhatsApp'></MenuItems>
                                            <MenuItems wrapperClass='text-black' icon={<LinkIcon></LinkIcon>} title='Sao chép liên kết'></MenuItems>
                                        </ul>
                                    </div>
                                </div>
                                {/* <p className='text-white text-[13px]'>{video.summary.shares}</p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="follow-btn">
                <Button size='md' wrapperClass="border border-red border-solid border-1 text-red">Follow</Button>
            </div>
        </div>
    )
}

VideoPost.propTypes = {
    video: PropTypes.object
}

export default VideoPost;