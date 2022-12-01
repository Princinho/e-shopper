import { NavLink } from "react-router-dom"
import logo from '../assets/logo-color-on-transparent.svg'
import searchIcon from '../assets/icon-search.svg'
import bagIcon from '../assets/handbag-line.svg'
export default (props) => {
    return (
        <nav>
            <img alt="logo image" className="logo-image" src={logo} />
            <ul>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/shop'>Shop</NavLink></li>
                <li><NavLink to='/featured'>Featured</NavLink></li>
                <li><NavLink to='/recommended'>Recommended</NavLink></li>
            </ul>
            <div className="nav-right">
            <div className="search-bar">
                <input type='text' className="search-input" placeholder="Search Product" />
                <button type="button" className="btn-basket">
                    <img alt="Bag Icon" className="btn-icon" src={bagIcon} />
                </button>
            </div>
            <div className="login-info">
                <button type="button" className="btn btn-signin">Sign in</button>
                <button type="button" className="btn btn-dark btn-signup">Sign up</button>
            </div> 
            <span></span>

            </div>
        </nav>)
}