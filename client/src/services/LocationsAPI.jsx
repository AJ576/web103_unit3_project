const getAllLocations = async() =>{
    
    const response = await fetch('http://localhost:3000/Locations')
    const data = await response.json()
    console.log(data)
    return data
}
export default {getAllLocations}
