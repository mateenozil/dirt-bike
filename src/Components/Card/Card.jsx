import classNames from "classnames"
import { FaInstagram } from "react-icons/fa"

export default function Card(props){
    const outerStyle = classNames(
        'w-xs h-md',
        'bg-light-50',
        'rounded-2xl',
        'shadow-xl shadow-gray-800'
    )
    const innerStyle = classNames(
        'py-8 px-8',
        'space-y-8',
        'text-neutral-800',
        
    )
    const logoStyle = classNames(
        'rounded-t-2xl',
        'w-full h-1/2',
        'object-cover'
    )
    const titleStyle = classNames(
        'text-2xl font-semibold tracking-wide'
    )
    const descStyle = classNames(
        'text-lg', 'h-20', 'overflow-y-auto',
    )
    const iconStyle = classNames(
        'flex justify-between'
    )
    const iconStyle2 = classNames(
        'w-8 h-8'
    )
    return(
        <div className={outerStyle}>
            <img src={props.logo} alt="logo" className={logoStyle}/>
            <div className={innerStyle}>
                <div className={iconStyle}>
                    <h1 className={titleStyle}>{props.title}</h1>
                    <a href={props.link}>
                        <FaInstagram className={iconStyle2}/>
                    </a>
                </div>
                <p className={descStyle}>{props.desc}</p>
            </div>
        </div>
    )
}