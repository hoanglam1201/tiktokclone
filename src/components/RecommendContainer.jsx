import videos from '../data/videos'
import VideoPost from "./VideoPost";

const RecommendContainer = (props) => {
    return (
        <div className='space-y-10'>
            {props.videos.map((video) => {
                console.log(video);
                return (
                    <div key={video.id} className='video' data-video-id={video.id}>
                        <VideoPost video={video} />
                        <div className='h-[1px] w-full bg-gray-800 mt-6' />
                    </div>
                )
            })}
        </div>
    )
}
export default RecommendContainer;