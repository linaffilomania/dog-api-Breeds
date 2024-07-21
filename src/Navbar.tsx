import './App.css';
import Link from "./component/Link.tsx";

const Navbar = () => {
    const title = 'dogs Blog';
    const LINKS = [
        {name: 'Documentation', link: 'https://dog.ceo/dog-api/documentation/'},
        {name: 'About', link: 'https://dog.ceo/dog-api/about'},
        {name: 'TwiterGroup', link: 'https://x.com/i/flow/login?redirect_after_login=%2Fdog__CEO'}
    ];
    return (
        <nav className='navbar'>
            <div className='navbar-title'>
                {title}
            </div>
            <div className='navbar-links'>
                {LINKS.map((item, i) => (
                    <Link name={item.name} link={item.link} key={i}/>
                ))}
            </div>
        </nav>
    )
}
export default Navbar;