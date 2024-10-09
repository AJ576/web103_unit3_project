import { pool } from "../config/database.js";
const getEvents = async(req,res) =>{
    try{
        const results = await pool.query('SELECT * FROM events ORDER BY id ASC')
        res.status(200).json(results.rows)
    }catch(error){
        res.status(409).json({error: error.message})
        console.log(error)
    }
}

const getLocEvents = async(req,res) => {
    try {
        const selectQuery = `
          SELECT *
          FROM events
          WHERE location=$1
        `
        const eventLoc = req.params.location
        const results = await pool.query(selectQuery, [eventLoc])
        res.status(200).json(results.rows)
      } catch (error) {
        res.status(409).json({error: error.message})
        console.log(error)
      }

}

const getIDEvents = async(req,res) => {
  try {
      const selectQuery = `
        SELECT *
        FROM events
        WHERE id=$1
      `
      const eventid = req.params.id
      const results = await pool.query(selectQuery, [eventid])
      res.status(200).json(results.rows)
    } catch (error) {
      res.status(409).json({error: error.message})
      console.log(error)
    }

}
export default {getEvents,getLocEvents,getIDEvents}