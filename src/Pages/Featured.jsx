import useProductsManager from "../components/useProductsManager"
import ShopProductCard from "../components/ShopProductCard"
export default ({cart}) => {
    const featuredList = [1, 3, 5, 7, 9, 11, 13, 15, 17]
    const { products, error } = useProductsManager()
    return (
        <main className="main-container">
            <div className="shop-product-grid">
                {products?.filter(p => featuredList.includes(p.id)).map(product => <ShopProductCard cart={cart} product={product} />)}
            </div>
        </main>)
}