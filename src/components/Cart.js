import { useState } from 'react'
export default function useCart() {
    const [cart, setCart] = useState([])
    const [openCart, setOpenCart] = useState(false)
    function add(id, amount) {
        setCart([...cart, { id, amount: amount > 0 ? amount : 1 }])
    }
    function remove(id) {
        setCart(cart.filter(i => +i.id != +id))
        console.log(cart, id)
        console.log(cart.filter(i => +i.id != +id))
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
    const toggle = () => setOpenCart(!openCart)
    const isOpen = () => openCart
    return { add, remove, hasItem, getAllItems, getItemCount, toggle, isOpen}
}
