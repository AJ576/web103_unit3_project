import { pool } from "./database.js";
import "./dotenv.js"
import eventData from "../data/events.js";
import locationsData from "../data/locations.js";

const createEventsTable = async () =>{
    const createEventsTableQuery = `
    DROP TABLE IF EXISTS events;

    CREATE TABLE IF NOT EXISTS events(
        id serial PRIMARY KEY,
        event text NOT NULL,
        img text NOT NULL,
        dates date NOT NULL,
        time text NOT NULL,
        location text NOT NULL
        )
    `
    try{
        const res = await pool.query(createEventsTableQuery)
        console.log('Events have been added')
    }
    catch(err){
        console.log('Error creating the events table')
        console.log(err)
    }
}

const createLocationTable = async() =>
{
    const createLocationTableQuery = `
    DROP TABLE IF EXISTS locations;

    CREATE TABLE IF NOT EXISTS locations(
        id serial PRIMARY KEY,
        name text NOT NULL,
        address text NOT NULL,
        img text NOT NULL
    )
    `
    try{
        const res = await pool.query(createLocationTableQuery)
        console.log('Locations have been added')
    }
    catch(err){
        console.log('Error creating the locations table')
        console.log(err)
    }
}
const seedEventsTable = async () => {
    await createEventsTable()
    eventData.forEach((event) => {
        const insertQuery = {
          text: 'INSERT INTO events (id,event,img,dates,time,location) VALUES ($1, $2, $3, $4, $5, $6)'
        }
        const values = [
            event.id,
            event.event,
            event.img,
            event.dates,
            event.time,
            event.location
        ]
        pool.query(insertQuery, values, (err, res) => {
            if (err) {
                console.error('⚠️ error inserting events', err)
                return
            }

            console.log(`✅ ${event.event} added successfully`)
        })
      })
  
  }


  const seedLocationsTable = async () => {
    await createLocationTable()
    locationsData.forEach((location) => {
        const insertQuery = {
          text: 'INSERT INTO locations (id,name,address,img) VALUES ($1, $2, $3, $4)'
        }
        const values = [
            location.id,
            location.name,
            location.address,
            location.img,

        ]
        pool.query(insertQuery, values, (err, res) => {
            if (err) {
                console.error('⚠️ error inserting location', err)
                return
            }

            console.log(`✅ ${location.name} added successfully`)
        })
      })
  
  }
seedEventsTable()
  


seedLocationsTable()
  

