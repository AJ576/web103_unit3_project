import React, { useState, useEffect } from 'react'
import EventsAPI from '../services/EventsAPI'
import Event from '../components/Event'
import '../css/LocationEvents.css'

const LocationEvents = (props) => {
    const [events, setEvents] = useState([])


    useEffect(() => {
        (async () => {
            try {
                const eventsData = await EventsAPI.getEventsByLoc(props.location)
                console.log('eventsData')
                setEvents(eventsData)
                
            }
            catch (error) {
                throw error
            }
        }) ()
    }, [])


    return (
        <div className='location-events'>
            <header>

                <div className='location-info'>
                    <h2>{props.location}</h2>
                    <p>{props.address}</p>
                </div>
            </header>

            <main>
                {
                    events && events.length > 0 ? events.map((event, index) =>
                        <Event
                            key={event.id}
                            id={event.id}
                            title={event.event}
                            date={event.dates}
                            time={event.time}
                            image={event.img}
                        />
                    ) : <h2><i className="fa-regular fa-calendar-xmark fa-shake"></i> {'No events scheduled at this location yet!'}</h2>
                }
            </main>
        </div>
    )
}

export default LocationEvents