import PropTypes from 'prop-types';
const Avatar = ({ size = 'sm', ...props }) => {
    const sizeMap = {
        sm: 'w-8 h-8',
        md: 'w-[32px] h-[32px]',
        lg: 'w-[56px] h-[56px]',
        commentUser: 'w-[42px] h-[42px]',
        avatarProfile: 'w-[116px] h-[116px]',
    }
    return (
        <div>
            <img src={props.imageURL} alt={props.altText} className={`rounded-full ${sizeMap[size]} `} />
        </div>
    )
}
Avatar.propTypes = {
    imageURL: PropTypes.string,
    altText: PropTypes.string,
    size: PropTypes.string,
   
}
export default Avatar;