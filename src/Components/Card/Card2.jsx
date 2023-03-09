import classNames from "classnames"
import { FaMapMarkerAlt } from "react-icons/fa"
import './Scroll.css'


export default function Card2(props){
    const outerStyle = classNames(
        'w-xs h-xs',
        'bg-light-50',

    )
    const innerStyle = classNames(
        'py-4',
        'space-y-1',
        'text-neutral-800',
        
    )
    const logoStyle = classNames(
        'w-full h-4/7',
        'object-cover'
    )
    
    const descStyle = classNames(
        'text-lg',
        'max-h-20',
        'overflow-y-auto',
    )
    
    const dateStyle = classNames(
        'text-sm text-gray-400'
    )

    const locStyle = classNames(
        'text-sm text-gray-400',
        'flex space-x-2'
    )
    return(
        <div className={outerStyle}>
            <div className={locStyle}>
                <p>{props.loc}</p>
                <FaMapMarkerAlt/>
            </div>
            <img src={props.logo} alt="logo" className={logoStyle}/>
            <div className={innerStyle}>
                <p className={dateStyle}>{props.date}</p>
                <p className={descStyle}>{props.desc}</p>
            </div>
        </div>
    )
}