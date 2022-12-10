import { Link } from "react-router-dom"
import checkMark from '../assets/icon-check.svg'
export default ({ product, cart }) => {
    console.log(product)
    return (

        <div className="shop-product-card">
            <Link to={'/product/' + product.id} className="product-card-link-wrapper">
                <img alt='' className="shop-product-image" src={product.image} />
                <h1 className="shop-product-title line-clamp-1" title={product.title}>{product.title}</h1>
                <h2 className="shop-product-category line-clamp-1">{product.category}</h2>
                <span className="shop-product-price">{product.formattedPrice}</span>
            </Link>
            {cart.hasItem(product.id) ?
                <>
                    <button className="shop-product-basket-cta"
                        onClick={(e) => {
                            e.stopPropagation()
                            cart.remove(product.id)
                        }}
                    >Remove from basket</button>
                    <img className="icon-added-to-basket" src={checkMark} />
                </> : <button className="shop-product-basket-cta"
                    onClick={(e) => {
                        e.stopPropagation()
                        // console.log('clicked' + product.title)
                        cart.add(product.id)
                    }}
                >Add to basket</button>}
        </div>

    )
}