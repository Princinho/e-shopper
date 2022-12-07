import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import bagIcon from '../assets/icon-bag.svg'
import backIcon from '../assets/icon-back.svg'
import loaderImage from '../assets/loader2.svg'
export default ({ cart }) => {
    const [product, setProduct] = useState(null)
    const [quantity, setQuantity] = useState(1)
    const BASE_API = 'https://fakestoreapi.com/products/'
    const { id } = useParams()
    useEffect(() => {
        fetch(BASE_API + id).then(res => res.json()).then(prod => setProduct(prod))
            .catch(error => console.log(error))
        return () => {

        }
    }, [])
    return (
        <main className="main-container">
            <Link to={'/shop'} className='btn btn-imaged btn-back-home'><img src={backIcon} alt="" aria-hidden='true' />Back to shop</Link>
            {product ?
                <div className="product-sheet">
                    <div className="product-image-container">
                        <img src={product.image} className="product-image" alt={product.title} />
                    </div>
                    <div className="product-details">
                        <h1 className="product-name">{product.title}</h1>
                        <p className="product-description">{product.description}</p>
                        <hr className="separator" />
                        <div className="action-buttons">

                            <div className="quantity-selector">
                                <button className="btn" onClick={() => setQuantity(quantity - 1 > 0 ? quantity - 1 : quantity)}>-</button>
                                <span className="quantity">{quantity}</span>
                                <button className="btn" onClick={() => setQuantity(quantity + 1)}>+</button>
                            </div>
                            <div className="buy-options">
                                {cart.hasItem(id) ?
                                    <button className="btn btn-imaged" onClick={() => { cart.remove(id) }}><img src={bagIcon} />Remove from cart</button>
                                    :
                                    <button className="btn btn-imaged" onClick={() => { cart.add(product.id, quantity) }}><img src={bagIcon} />Add to cart</button>
                                }
                                <button className="btn btn-imaged"><img />Add to wishlist</button>
                            </div>
                        </div>

                    </div>
                </div>
                :
                <div style={{ display: 'grid', placeContent: 'center' }}><img style={{ width: '50%', margin: '0 auto' }} src={loaderImage} alt="" /></div>
            }

        </main>
    )
}