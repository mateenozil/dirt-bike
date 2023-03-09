import classNames from "classnames"
export default function Title(props) {
    const style = classNames(
        props.color,
        'font-serif',
        'text-3xl md:text-4xl',
        'font-bold',
        'tracking-wider',
        props.decor
    )
    return(
        <div className={style}>
            {props.children}
        </div>
    )
}