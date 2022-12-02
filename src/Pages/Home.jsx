import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HeroImage from '../assets/girls-in-carts.jpg'
import ProductCard from "../components/ProductCard";
const BASE_API = 'https://fakestoreapi.com/'
export default function Home() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        });
        fetch(BASE_API + 'products').then(res => res.json())
            .then(result => setProducts(result.map(p => { return { ...p, formattedPrice: formatter.format(p.price) } })))
            .catch(error => console.error(error))

        return () => {

        }
    }, [])

    return (
        <main className="main-container">
            <section className="hero">
                <div className="hero-text-container">
                    <h1>Feel good while shopping</h1>
                    <p>Blasitas. asdscsoadifa sa sodifasdi asodijfasidjf oasidfasdifoas.
                        Apoirsasid dfasdo reghhgaoiue oaieof oaidhofboaisd, oaisdfoia, aoisdjfasdjfa.
                        Aioiwea owaioidoaiu reowi asasdij raoie aosiadao irjoaijoij adhgaoi eiaoiroaie!
                    </p>
                    <Link to={'/shop'} className='btn btn-dark btn-shop-now'>Shop Now</Link>
                </div>
                <div className="hero-image-container">
                    <img src={HeroImage} className='hero-image' />
                </div>
            </section>
            <section className="featured-products">
                <h1 className="section-title">Featured Products</h1>
                <div className="product-grid-container">
                    {products.slice(5,9).map(prod => <ProductCard key={prod.id} name={prod.title}
                        subtitle={prod.formattedPrice} imageUrl={prod.image}
                        description={prod.description} />)}
                </div>
            </section>
            <section className="recommended-products">
                <h1 className="section-title">Recommended Products</h1>
                <div className="product-grid-container">
                {products.slice(0,5).map(prod => <ProductCard key={prod.id} name={prod.title}
                        subtitle={prod.formattedPrice} imageUrl={prod.image}
                        description={prod.description} />)}
                </div>
            </section>
        </main>
    )
}