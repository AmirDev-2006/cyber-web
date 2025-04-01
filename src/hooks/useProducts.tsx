import { useEffect, useState } from "react"
import {fetchProducts} from '../API/API'
const useProducts = () =>{
    const [products , setProducts] = useState([])

    useEffect(()=>{
        const getproducts = async () =>{
            const data = await fetchProducts()
            setProducts(data)
        }
        getproducts()
    } , [])
    return products
}
export default useProducts
