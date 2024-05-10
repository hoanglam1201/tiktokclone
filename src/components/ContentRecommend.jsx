import ProTypes from 'prop-types';
import NameUserContainer from './NameUserContainer';
import TextContent from './TextContent';
import VideoContent from './VideoContent';
const ContentRecommend = (props) => {
    return(
        <div>
            <NameUserContainer userID="hannah_onlyn1" userName="Hoa Bào" ></NameUserContainer>
            <TextContent textContent="#fyp"></TextContent>
            <VideoContent></VideoContent>
        </div>
    )
}

export default ContentRecommend;