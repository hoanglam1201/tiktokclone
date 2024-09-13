import ProTypes from 'prop-types';

const MenuItems = (props) => {
    return (
        <li className={`flex ml-1`}>
            <div className='p-4'>{props.icon}</div>
            <div className={`flex ${props.wrapperClass} items-center`}>{props.title}</div>
        </li>
    )
}
MenuItems.propTypes = {
    icon: ProTypes.element,
    title: ProTypes.string,
    wrapperClass: ProTypes.string,
}
export default MenuItems;