import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

export default ({ cart }) => {
    return (
        <>
            <Navbar cart={cart} />
            <Outlet />
        </>
    )
}