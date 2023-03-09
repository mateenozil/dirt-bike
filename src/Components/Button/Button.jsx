import classNames from "classnames"

export default function Button (props) {
    const style = classNames(
        'bg-light-50',
        'rounded-4xl',
        'py-2 px-8',
        'text-xl',
        'hover:(cursor-pointer transition-all ease-in-out transform scale-110)',
        props.bg,
        props.color
    )
    return (
        <button 
        onClick={props.onClick} 
        className={style}>
            {props.children}
        </button>
        
    )
}