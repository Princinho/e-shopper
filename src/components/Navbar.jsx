import { NavLink } from "react-router-dom"
import logo from '../assets/logo-color-on-transparent.svg'
import bagIcon from '../assets/handbag-line.svg'
import backIcon from '../assets/icon-back.svg'
import useProductsManager from "./useProductsManager"
export default ({ cart }) => {
    function hideNav() {
        console.log('hiding navigation')
    }
    const { products } = useProductsManager()
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
                            <button className="btn btn-clear-basket" onClick={() => cart.reset(0)}>Clear basket</button>
                        </div>
                    </header>
                    <ul className="cart-items">
                        {cart.getAllItems()
                            .map(item => {
                                const product = products?.find(p => p.id == item.id)
                                console.log(item)
                                console.log(product)
                                return (
                                    <li className="cart-item">
                                        <div className="cart-item-quantity-selector">
                                            <button className="btn-cart" onClick={() => cart.increaseQuantity(item.id)}>+</button>
                                            <button className="btn-cart" onClick={() => cart.decreaseQuantity(item.id)}>-</button>
                                        </div>
                                        <img className="cart-item-image" src={product?.image} />
                                        <div style={{ display: 'grid', placeContent: 'center' }}>
                                            <div>
                                                <span className="cart-item-title line-clamp-2" key={item.id}>{product.title}</span>
                                                <span className="cart-item-quantity-label">Quantity: </span><span className="cart-item-quantity">{item.quantity}</span>
                                                {' | '}
                                                <span>Price: {product.price}</span>
                                                <hr />
                                                <span>Total: {product.price * item.quantity}</span>
                                            </div>
                                        </div>
                                        <button className="btn-remove-cart-item btn-cart"
                                            onClick={() => cart.remove(item.id)}>
                                            X
                                        </button>
                                    </li>
                                )
                            })}

                    </ul>
                    <div className="cart-footer">
                        <div className="cart-total-wrapper">
                            <span className="cart-total-label">Total amount</span> <span> </span>
                            <span className="cart-total-value">
                                {cart.getAllItems()
                                    .map(item => (
                                        {
                                            quantity: item.quantity,
                                            product: products?.find(p => p.id == item.id)
                                        })).reduce((prev, current) => {
                                            return prev + (current.quantity * current.product.price)
                                        }, 0).toFixed(2)
                                }
                            </span>
                        </div>
                        <button className="btn-cart-checkout">
                            Checkout
                        </button>
                    </div>
                </div>
            </section>
        </>)
}