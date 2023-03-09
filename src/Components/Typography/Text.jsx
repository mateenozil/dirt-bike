import classNames from "classnames"
export default function Text(props) {
    const style = classNames(
        props.color,
        'text-2xl'
    )
    return(
        <div className={style}>
            {props.children}
        </div>
    )
}