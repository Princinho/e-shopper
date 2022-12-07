import { NavLink } from "react-router-dom"
import logo from '../assets/logo-color-on-transparent.svg'
import bagIcon from '../assets/handbag-line.svg'
import backIcon from '../assets/icon-back.svg'
export default ({ cart }) => {
    function hideNav() {
        console.log('hiding navigation')
    }
    return (
        <>

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
                        <button type="button" className="btn-basket" onClick={() => { cart.toggle() }}>
                            <span>
                                <img alt="Bag Icon" className="btn-icon" src={bagIcon} />
                                <span className='cart-items-count-badge'>{cart.getItemCount()}</span>
                            </span>
                        </button>
                    </div>
                    <div className="login-info">
                        <button type="button" className="btn btn-signin">Sign in</button>
                        <button type="button" className="btn btn-dark btn-signup">Sign up</button>
                    </div>
                    <span></span>

                </div>
            </nav><span> </span>
            <section className="cart-wrapper" onClick={() => hideNav()}>
                <div className="cart" onClick={(e) => { console.log('clicking nav'); e.stopPropagation() }}>
                    <header className="cart-header">
                        <div className="cart-title-wrapper">
                            <h1 className="cart-title">My Basket</h1> ({cart.getItemCount()}) items
                        </div>
                        <div className="cart-buttons-wrapper">
                            <button className="btn btn-close-cart" onClick={() => { cart.toggle() }}><img src={backIcon} /></button>
                            <button className="btn btn-clear-basket">Clear basket</button>
                        </div>
                    </header>
                    <ul className="cart-items">
                        {cart.getAllItems()
                        .map(item=>item.name)}
                        <li className="cart-item">
                            <span></span>
                        </li>
                    </ul>
                </div>
            </section>
        </>)
}