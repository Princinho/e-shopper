import { useState } from "react"
export default (props) => {
    const BASE_API = 'https://fakestoreapi.com/products/'
    const { id } = useParams()
    useEffect(() => {
        fetch(BASE_API + id).then(res => res.json()).then(prod => setProduct(prod))
            .catch(error => console.log(error))
        return () => {
            
        }
    }, [])
    return null;
}