import { useState, useEffect } from "react"
export default () => {
    const BASE_API = 'https://fakestoreapi.com/'
    const [products, setProducts] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        });
        console.log('loading products')
        fetch(BASE_API + 'products').then(res => res.json())
            .then(result => {

                setProducts(result.map(p => { return { ...p, formattedPrice: formatter.format(p.price) } }))
            })
            .catch(error => {
                console.error(error)
                setError(error)
            })

        return () => {

        }
    }, [])
    console.log('prods contain', products)
    return { products: products, error: error };
}