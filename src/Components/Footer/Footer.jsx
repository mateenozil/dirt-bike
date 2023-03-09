import classNames from "classnames"
export default function Footer (props) {
    const style = classNames(
        'p-4',
        'bg-neutral-700',
        'text-gray-50',
        'grid grid-cols-1'
    )
    return (
        <div className={style}>
            {props.children}
        </div>
    )
}