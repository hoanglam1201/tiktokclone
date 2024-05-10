import ProTypes from 'prop-types';
const NameUserContainer = (props) => {
    return(
            <div className='flex items-end'>
                <div className='font-bold text-white pr-3 text-[19px]'>{props.userID}</div>
                <div className='text-white'>{props.userName}</div>
            </div>
    )
}
NameUserContainer.proTypes = {
    userID: ProTypes.string,
    userName:ProTypes.string,
}
export default NameUserContainer;