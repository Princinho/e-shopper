import ShopProductCard from "../components/ShopProductCard"
import useProductsManager from "../components/useProductsManager"

export default ({ cart }) => {
    const { products, error } = useProductsManager()
    return (
        <main className="main-container">

            <div className="shop-product-grid">
                {products?.map(product => <ShopProductCard cart={cart} product={product} />)}
            </div>
        </main>
    )
}