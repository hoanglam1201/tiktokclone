// VideoUserPost.js
import PropTypes from 'prop-types';
import profile from '../data/profile';

const VideoUserPost = ({ videoId, title }) => {
    const video = profile.videoList.find((item) => item.id === videoId);

    return (
        <div className='relative overflow-hidden rounded-[10px] w-[189px] h-[280.7px] mr-4 mb-4'>
            <video className='absolute inset-0 w-full h-[250.7px] object-cover' src={video.videoURL} controls></video>
            <div className='absolute -bottom-3 left-0 right-0 p-2 bg-black bg-opacity-50 text-white overflow-hidden whitespace-nowrap'>
                <div className="line-clamp-2">
                    {title}
                </div>
            </div>
        </div>
    );
};

VideoUserPost.propTypes = {
    videoId: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
};

export default VideoUserPost;
