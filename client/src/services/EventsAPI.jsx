const getAllEvents = async() =>{
    
    const response = await fetch('http://localhost:3000/events')
    const data = await response.json()
    return data
}

const getEventsById = async(id=1) =>{
    console.log(id)
    const response = await fetch('http://localhost:3000/events/event/'+id)
    const data = await response.json()

    return data
}

const getEventsByLoc = async(location) =>{
    const response = await fetch('http://localhost:3000/events/'+location)
    const data = await response.json()
    console.log(data)
    return data
}
export default {getAllEvents,getEventsById,getEventsByLoc}