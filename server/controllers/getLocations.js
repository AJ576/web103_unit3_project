import { pool } from "../config/database.js";
const getLocations = async(req,res) =>{
    try{
        const result = await pool.query('SELECT * FROM locations ORDER BY id ASC')
        res.status(200).json(result.rows)
    }catch(error)
    {
        res.status(409).json({error:error.message})
        console.log(error)
    }
}

const getLocationByID = async(req,res) => {
    try {
        const selectQuery = `
          SELECT *
          FROM locations
          WHERE id=$1
        `
        const Locname = req.params.location
        const results = await pool.query(selectQuery, [Locname])
        res.status(200).json(results.rows)
      } catch (error) {
        res.status(409).json({error: error.message})
        console.log(error)
      }

}

export default {getLocations,getLocationByID}