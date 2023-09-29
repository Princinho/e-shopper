import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HeroImage from '../assets/girls-in-carts.jpg'
import ProductCard from "../components/ProductCard";
import loaderImage from '../assets/loader2.svg'
import useProductsManager from "../components/useProductsManager";
const BASE_API = 'https://fakestoreapi.com/'
const ERROR_MESSAGE = 'Unable to retrieve products, please refresh.'
export default function Home() {
    // const [products, setProducts] = useState([])
    // const [error, setError] = useState(null)
    // useEffect(() => {
    //     const formatter = new Intl.NumberFormat('en-US', {
    //         style: 'currency',
    //         currency: 'USD',
    //     });
    //     fetch(BASE_API + 'products').then(res => res.json())
    //         .then(result => setProducts(result.map(p => { return { ...p, formattedPrice: formatter.format(p.price) } })))
    //         .catch(error => setError(error))

    //     return () => {

    //     }
    // }, [])
    const { products, error } = useProductsManager()
    console.log('products contains ', products)
    return (
        <main className="main-container">
            <section className="hero">
                <div className="hero-text-container">
                    <h1>Welcome to Es-hopper!</h1>
                    <p style={{ lineHeight: '1.5', wordSpacing: '.5em', fontSize: "1.1em" }}>
                        Discover a curated blend of fashion and cutting-edge tech. Elevate your everyday with our handpicked collection designed for the modern individual. 
                    </p>
                    <Link to={'/shop'} className='btn btn-dark btn-shop-now'>Explore now!</Link>
                </div>
                <div className="hero-image-container">
                    <img src={HeroImage} className='hero-image' />
                </div>
            </section>
            <section className="featured-products">
                <h1 className="section-title">Featured Products</h1>
                <div className="product-grid-container">
                    {products != null ? products.slice(5, 9).map(prod => <Link to={`/product/${prod.id}`} key={prod.id}> <ProductCard name={prod.title}
                        subtitle={prod.formattedPrice} imageUrl={prod.image}
                        description={prod.description} /></Link>) : <div className="loader-container">{error ? <p>{ERROR_MESSAGE}</p> : <img src={loaderImage} alt="" />}</div>}
                </div>

            </section>
            <section className="recommended-products">
                <h1 className="section-title">Recommended Products</h1>
                <div className="product-grid-container">
                    {products != null ? products.slice(0, 4).map(prod => <ProductCard key={prod.id} name={prod.title}
                        subtitle={prod.formattedPrice} imageUrl={prod.image}
                        description={prod.description} />) : <div className="loader-container">{error ? <p>{ERROR_MESSAGE}</p> : <img src={loaderImage} alt="" />}</div>}
                </div>
            </section>
        </main>
    )
}