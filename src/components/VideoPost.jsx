import PropTypes from 'prop-types'
import Avatar from "./Avatar";
import Button from "./Button";
import HeartIcon from './icons/HeartIcon';
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
                        <video ref={videoRef} className='w-[270px] h-[490px] bg-black' width="270" height="490">
                            <source src={video.src} type='video/mp4' />
                        </video>
                        <div className='flex flex-col items-center gap-5'>
                            <div className='flex flex-col items-center gap-2'>
                                <Button wrapperClass="rounded-full h-[48px] w-[48px]" prefixIcon={<HeartIcon className="text-[20px]" />}></Button>
                                <p className='text-white text-[13px]'>{video.summary.likes}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="follow-btn">
                <Button size='md'>Follow</Button>
            </div>
        </div>
    )
}

VideoPost.propTypes = {
    video: PropTypes.object
}

export default VideoPost;