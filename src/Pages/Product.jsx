import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import bagIcon from '../assets/icon-bag.svg'
export default (props) => {
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
    // if (product) console.log(product)
    return (
        <main className="main-container">
            {product ?
                <div className="product-sheet">
                    <div className="product-image-container">
                        <img src={product.image} className="product-image" alt={product.title} />
                    </div>
                    <div className="product-details">
                        <h1 className="product-name">{product.title}</h1>
                        <p className="product-description">{product.description}</p>
                        <hr className="separator"/>
                        <div className="action-buttons">

                        <div className="quantity-selector">
                            <button className="btn" onClick={() => setQuantity(quantity - 1 > 0 ? quantity - 1 : quantity)}>-</button>
                            <span className="quantity">{quantity}</span>
                            <button className="btn" onClick={() => setQuantity(quantity + 1)}>+</button>
                        </div>
                        <div className="buy-options">
                            <button className="btn btn-imaged"><img src={bagIcon} />Add to cart</button>
                            <button className="btn btn-imaged"><img />Add to wishlist</button>
                        </div>
                        </div>

                    </div>
                </div>
                :
                <p>loading...</p>}

        </main>
    )
}