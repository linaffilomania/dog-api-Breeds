const Link = ({name, link}:{name:string,link:string}) => {
    return(
        <div className='Link'>
            <a  href={link}>{name}</a>
        </div>
    )


}
export default Link