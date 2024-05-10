import ProTypes from 'prop-types';
import SearchIcon from './icons/SearchIcon';
import { useState } from 'react';
const SearchInput = (props) => {
    const [isOpenSuggestion, setIsOpenSuggestion] = useState(false);
    return(
        
        <div className="relative w-full h-[46px] min-w-[300px]">
            <input onFocus={() => setIsOpenSuggestion(true)} onBlur={() => setIsOpenSuggestion(false)} className='h-full w-full bg-[#ffffff1f] text-white outline-none rounded-[92px] px-[16px] py-[12px]' placeholder={props.placeholder}/>
            <div className='absolute top-1/2 right-[16px] -translate-y-1/2'>
                <SearchIcon></SearchIcon>
            </div>
            {isOpenSuggestion && (<div className="top-[52px] text-[14px] w-full text-white bg-[#252525] rounded-[8px] max-h-[500px] search-list absolute">
                <p className='px-[12px] py-[3px]'>Tim kiem gan day</p>
                {props.suggestionItems?.map((item,index) => (
                    <div key={index} className='py-[9px] px-[16px] cursor-pointer hover:bg-[#ffffff1f]'>{item}</div>
                ))}
            </div>)}
        </div>
    )
}
SearchInput.proTypes = {
    placeholder: ProTypes.string,
    suggestionItems: ProTypes.array
}
export default SearchInput;