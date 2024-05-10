import ProTypes from 'prop-types';
import Avatar from './Avatar';

const FollowItems = (props) => {
    return (
        <div className='flex pl-5 mb-3 mt-3'>
            <Avatar imageURL={props.avatarURL} altText={props.name}></Avatar>
            <div className='text-white flex items-center pl-4'>{props.name}</div>
        </div>
    )
}
FollowItems.propTypes = {
    avatarURL: ProTypes.string,
    name: ProTypes.string
}
export default FollowItems;