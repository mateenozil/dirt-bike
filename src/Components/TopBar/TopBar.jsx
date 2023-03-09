import { FaBars } from "react-icons/fa"
import classNames from "classnames"
import { useState } from "react"
import { Link } from "react-router-dom"
import { Fade, Slide } from "react-awesome-reveal"
import SearchBar from '../SearchBar/SearchBar'

function TopBar(props) {
    const [click, setClick] = useState(false)
    const flex = classNames('flex','flex-row','justify-between','items-center','max-w-screen-lg','mx-auto')
    const border = classNames('border-2','border-gray-200','rounded-md','flex','p-[4px]','hover:bg-gray-200','md:hidden')
    return (
        <div>
            <div className='w-full border-b-2 border-gray-200'>
                <div className='p-4 space-y-4'>
                    <div className={flex}>
                        <div className='px-4 flex flex-row items-center space-x-4'>
                            <Link className='text-yellow-600 text-3xl font-sans tracking-wider font-bold no-underline' to='/'>
                                𝔻𝕚𝕣𝕥 𝔹𝕚𝕜𝕖
                            </Link>
                            <SearchBar/>
                        </div>
                        <div onClick={()=>{setClick(!click)}} className={border}>
                            <FaBars className='text-gray-500 w-[30px] h-[20px]'/>
                        </div>
                        <Slide duration={1500} direction='right' className='<md:hidden' triggerOnce>
                        <div className='<md:hidden space-x-8 flex flex-row items-center'>
                            {props.children}
                        </div>
                        </Slide>
                    </div>
                </div>
                {click &&
                    <Fade duration={1000}>
                        <div 
                            onClick={()=>{setClick(false)}} 
                            className='pb-4 space-y-4 md:hidden bg-neutral-700'>
                                {props.children}
                        </div>                
                    </Fade>
                }
            </div>    
        </div>
    )
}

  
export default TopBar
  