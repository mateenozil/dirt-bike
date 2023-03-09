import classNames from "classnames"
export default function FixedButton (props) {
    const style = classNames(
        'fixed bottom-0 right-0',
        'bg-light-50',
        'rounded-3xl',
        'p-4',
        'text-xl',
        'hover:(cursor-pointer transition-all ease-in-out transform scale-110)',
        props.bg,
        props.color
    )
    return (
        <button className={style}>
            {props.children}
        </button>
    )
}