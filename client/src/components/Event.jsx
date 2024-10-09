import React, { useState, useEffect } from 'react'
import EventsAPI from '../services/EventsAPI'
import '../css/Event.css'

const Event = (props) => {

    const [event, setEvent] = useState([])

    useEffect(() => {
        (async () => {
            try {
                const eventData = await EventsAPI.getEventsById(props.id)
                setEvent(eventData[0])
            }
            catch (error) {
                throw error
            }
        }) ()
    }, [])

    return (
        <article className='event-information'>
            <img src={event.img} />

            <div className='event-information-overlay'>
                <div className='text'>
                    <h3>{event.event}</h3>
                    <p><i className="fa-regular fa-calendar fa-bounce"></i> {event.dates} <br /> {event.time}</p>
                </div>
            </div>
        </article>
    )
}

export default Event