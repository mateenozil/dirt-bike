import classNames from "classnames"

export default function Avatar2 (props) {
    const style = classNames(
        'flex',
        'space-x-2'
    )
    const imageStyle = classNames(
        'rounded-full border-8 border-neutral-900',
        'w-60 h-60',
        'object-cover'
    )
    const posStyle = classNames(
        'w-60','text-xl text-center'
    )
    const nameStyle = classNames(
        'w-60','text-xl text-center'
    )
    return (
        <div className={style}>
            <img className={imageStyle} src={props.image} alt="Sensei" />
            <div>
                <p className={posStyle}>{props.position}</p>
                <p className={nameStyle}>{props.name}</p>
            </div>
        </div>
        
    )
}