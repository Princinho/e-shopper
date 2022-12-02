import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

export default (props) => {
    return (
        <>
            <Navbar />
            
            <Outlet />
        </>
    )
}