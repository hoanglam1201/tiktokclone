import ProTypes from 'prop-types';
const Avatar = (props) => {
    return(
        <div>
            <img src={props.imageURL} alt={props.altText} className="rounded-full w-8"/>
        </div>
    )
}
Avatar.proTypes = {
    imageURL: ProTypes.string,
    altText: ProTypes.string
}
export default Avatar;