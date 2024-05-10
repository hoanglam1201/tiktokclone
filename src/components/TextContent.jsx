import ProTypes from 'prop-types';
const TextContent = (props) => {
    return(
            <div className='flex text-white'>
                {props.textContent}
            </div>
    )
}
TextContent.proTypes = {
    textContent: ProTypes.string,
    
}
export default TextContent;