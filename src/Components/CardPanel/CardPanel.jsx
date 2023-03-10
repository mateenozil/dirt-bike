import classNames from "classnames"
export default function CardPanel(props){
    const style = classNames(
        'text-left',
        'grid inline-grid',
        'grid-cols-1',
        `md:grid-cols-2`,
        'xl:grid-cols-4',
        'gap-x-8 gap-y-12',
        props.bg
    )
    return(
        <div className={style}>
            {props.children}
        </div>
    )
}