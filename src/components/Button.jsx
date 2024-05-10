import ProTypes from 'prop-types';
import { Children } from 'react';
const Button = (props) => {
    const sizeMap = {
        sm: 'h-[32px]',
        md: 'h-[36px]',
        lg: 'h-[40px]'
    }
    return (
    <button className={`text-white rounded-[2px] bg-[#ffffff14] px-[16px] flex items-center justify-content gap-[10px] ${sizeMap[props.size]}`} onClick={props.onClick}>
        {props.prefixIcon}
        {props.children}
    </button>)
}
Button.propTypes = {
    size: ProTypes.oneOf(['sm','md','lg']),
    prefixIcon: ProTypes.element,
    children: ProTypes.string,
    onclick: ProTypes.func,
}
export default Button;