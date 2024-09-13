import ProTypes from 'prop-types';

const Button = ({ wrapperClass, ...props }) => {
    const sizeMap = {
        sm: 'h-[32px] ',
        md: 'h-[36px]',
        lg: 'h-[40px]'
    }
    return (
        <button className={`text-white bg-[#ffffff14] rounded-[2px] px-[16px] flex items-center justify-content gap-[10px] ${sizeMap[props.size]} ${wrapperClass}`} onClick={props.onClick}>
            {props.prefixIcon}
            {props.children}
        </button>)
}

Button.propTypes = {
    size: ProTypes.oneOf(['sm', 'md', 'lg']),
    prefixIcon: ProTypes.element,
    children: ProTypes.string,
    onClick: ProTypes.func,
    wrapperClass: ProTypes.string
}

export default Button;