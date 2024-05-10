import ProTypes from 'prop-types';
import BadgeIcon from './BadgeIcon';
const BadgeButton = (props) => {
    return (
        <button className='relative mr-5 flex items-center justify-center ' >
            {props.icon}
            {props.badgeCount > 0 && (
                <div className='absolute  -top-6 -right-2'>
                    <BadgeIcon count={props.badgeCount}></BadgeIcon>
                </div>
            )}
        </button>
    )
}
BadgeButton.proTypes = {
    icon: ProTypes.element,
    badgeCount: ProTypes.number,
}
export default BadgeButton;