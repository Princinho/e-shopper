import useProductsManager from "../components/useProductsManager"

export default (props) => {
    const { products, error } = useProductsManager()
    return (
        <main className="main-container">
            <div><h1>Shop</h1></div>
            {products?.map(product => <h3>{product.title}</h3>)}
        </main>
    )
}