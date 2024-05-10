import ProTypes from 'prop-types';
import MessageIcon from './icons/MessageIcon';
import {useState} from 'react'
const BadgeIcon = (props) => {
    
    return (
        <div className='relative inline-block'>
            {/* <MessageIcon className="w-6 h-6" /> */}
            {props.count > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-500 rounded-full">
                    {props.count}
                </span>
            )}
            
    </div>
    )
}
BadgeIcon.proTypes = {
    count:ProTypes.number,
    
}
export default BadgeIcon;
