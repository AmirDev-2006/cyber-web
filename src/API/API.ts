const API_URL = ""

export const fetchProducts = async () =>{
    try{
        const response = await fetch(API_URL);
        if(!response.ok){
            throw new Error('error in fetch data from API')
        }
        return await response.json();
    }
    catch (error){
        console.error("error at request of API , Problem at API.ts" , error)
        return [];
    }
}
