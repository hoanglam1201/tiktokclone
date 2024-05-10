import ProTypes from 'prop-types';

const MenuItems = (props) => {
    return (
        <li className='flex ml-1'>
            <div className='p-4'>{props.icon}</div>
            <div className='text-white flex  items-center'>{props.title}</div>
        </li>
    )
}
MenuItems.proTypes = {
    icon: ProTypes.element,
    title: ProTypes.string,
}
export default MenuItems;