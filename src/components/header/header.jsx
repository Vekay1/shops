import logoImg from './../../img/icons/logo.svg'
import './header.css'

function Header (){
    return(
        <header className="header">
            <div className="container">
                <div className="header_row">
                    <div className="header_logo">
                        <img src={logoImg} alt=""/>
                        <span>Fashion</span>
                    </div>
                    <nav className="header_nav">
                        <ul>
                            <li><a href="/catalogue">catalogue</a></li>
                            <li><a href="/fashion">fashion</a></li>
                            <li><a href="/favorite">favorite</a></li>
                            <li><a href="/lifestyle">lifestyle</a></li>
                            <li><a href="/signup" className="header_nav-btn">sign up</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;