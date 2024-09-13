import ProTypes from 'prop-types';
import AltEmailIcon from './icons/AltEmailIcon';
import SmileIcon from './icons/SmileIcon';
import { useState } from 'react';
const AddComment = (props) => {
    return (
        <div className="relative w-full h-[46px] min-w-[300px] mt-5 mb-3">
            <input className='h-full w-full bg-[#ffffff1f] text-white outline-none rounded-[5px] px-[16px] py-[12px]' placeholder={props.placeholder} />
            <div className='absolute top-1/2 right-[16px] -translate-y-1/2 text-white'>
                <SmileIcon></SmileIcon>
            </div>
            <div className='absolute top-1/2 right-[42px] -translate-y-1/2 text-white'>
                <AltEmailIcon></AltEmailIcon>
            </div>
        </div>
    )
}
AddComment.propTypes = {
    placeholder: ProTypes.string,
    suggestionItems: ProTypes.array
}

export default AddComment;