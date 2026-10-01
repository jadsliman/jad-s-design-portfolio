import { Link, useNavigate } from 'react-router';
import './Header.css'

function Header() {
    const nav = useNavigate();

    function home() {
        nav('/');
    }

    function contact() {
        scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }

    return (
        <>
            <div className="header-container">
                <span className="header-title" onClick={home}>Jad's Design Portfolio</span>
                <div className='navigation-menu'>
                    <Link to="/logos" className='navigation-button'>Logos</Link>
                    <Link to="/social-media" className='navigation-button'>Social Media</Link>
                    <Link to="/posters" className='navigation-button'>Posters</Link>
                    <Link to="/others" className='navigation-button'>Others</Link>
                    <p onClick={contact} className='navigation-button'>Contact me</p>
                </div>
            </div>
        </>
    )
}

export default Header;