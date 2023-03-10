import classNames from "classnames"

export default function Card(props){
    const outerStyle = classNames(
        'py-8 w-xs h-md',
        'bg-light-50',
        'rounded-2xl',
        'shadow-sm shadow-gray-500'
    )
    const innerStyle = classNames(
        'py-8 px-8',
        'space-y-8',
        'text-neutral-800',
        
    )
    const logoStyle = classNames(
        'rounded-t-2xl',
        'w-full h-1/2',
        'object-contain'
    )
    const titleStyle = classNames(
        'text-2xl font-semibold tracking-wide'
    )
    const descStyle = classNames(
        'text-2xl','h-10', 'overflow-y-auto',
    )
    const iconStyle = classNames(
        'flex justify-between'
    )
    const buttonStyle = classNames(
        'bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-full'
    )
    return(
        <div className={outerStyle}>
            <img src={props.image} alt="logo" className={logoStyle}/>
            <div className={innerStyle}>
                <div className={iconStyle}>
                    <h1 className={titleStyle}>{props.name}</h1>
                </div>
                <p className={descStyle}>${props.price}</p>
                <button className={buttonStyle}>Add to cart</button>
            </div>
        </div>
    )
}