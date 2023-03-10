import classNames from "classnames"

export default function Avatar (props) {
    const style = classNames(
        'flex flex-col items-center',
        'space-y-2'
    )
    const imageStyle = classNames(
        'rounded-full border-8 border-neutral-900',
        'w-50 h-50',
        'object-cover'
    )
    const textStyle = classNames(
        'w-60','text-xl text-center'
    )
    return (
        <div className={style}>
            <img className={imageStyle} src={props.image}/>
            <p className={textStyle}>{props.name}</p>
        </div>
        
    )
}