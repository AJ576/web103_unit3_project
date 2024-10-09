import express from 'express'
import eventControl from '../controllers/getEvents.js'
import locationControl from '../controllers/getLocations.js'


const router = express.Router()
router.get('/locations', locationControl.getLocations);

router.get('/events',eventControl.getEvents)
router.get('/events/:location',eventControl.getLocEvents)
router.get('/events/event/:id',eventControl.getIDEvents)

export default router