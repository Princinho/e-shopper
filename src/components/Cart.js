import { useState } from 'react'
export default function useCart() {
    const [cart, setCart] = useState([])
    const [openCart, setOpenCart] = useState(false)
    function add(id, quantity) {
        setCart([...cart, { id, quantity: quantity > 0 ? quantity : 1 }])
    }
    function remove(id) {
        setCart(cart.filter(i => +i.id != +id))
        console.log(cart, id)
        console.log(cart.filter(i => +i.id != +id))
    }
    function increaseQuantity(id, amount = 1) {
        setCart(cart.map(e => e.id == id ? ({ id, quantity: e.quantity + amount }) : e))
    }
    function decreaseQuantity(id, amount = 1) {
        setCart(cart.map(e => e.id == id ? ({ id, quantity: e.quantity - amount }) : e).filter(e => e.quantity > 0))


    }
    function hasItem(id) {
        // let result = cart.some(i => +i.id === +id)
        // console.log(cart, id)
        // console.log(result)
        return cart.some(i => i.id == id)
    }
    function getAllItems() {
        return [...cart]
    }
    function getItemCount() {
        return cart.length
    }
    function reset() {
        setCart([])
    }
    const toggle = () => setOpenCart(!openCart)
    const isOpen = () => openCart
    return { add, remove, hasItem, getAllItems, getItemCount, toggle, isOpen, reset, decreaseQuantity, increaseQuantity }
}
