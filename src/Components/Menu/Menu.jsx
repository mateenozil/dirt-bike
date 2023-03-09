import classNames from "classnames"

function Menu(props) {
    const style = classNames(
        'px-4 py-2',
        'flex justify-end',
        'lg:text-xl sm:text-sm no-underline',
        'space-x-2',
        'transition-all',
        'hover:(cursor-pointer text-yellow-200)',
        'border-2 rounded-xl border-gray-500'
    )
    return (
        <div onClick={props.click} className={style}>
            {props.children}
        </div>
    )
}

export default Menu