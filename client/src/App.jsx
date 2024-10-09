import React from 'react'
import { useRoutes, Link } from 'react-router-dom'
import Locations from './pages/Locations'
import LocationEvents from './pages/LocationEvents'
import Events from './pages/Events'
import './App.css'

const App = () => {
  let element = useRoutes([
    {
      path: '/',
      element: <Locations />
    },
    {
      path: '/MIT',
      element: <LocationEvents location='MIT, Cambridge, MA' address = '77 Massachusetts Ave, Cambridge, MA 02139, USA'/>
    },
    {
      path: '/CCNY',
      element: <LocationEvents location='City College of New York, NY'address = '160 Convent Ave, New York, NY 10031, USA' />
    },
    {
      path: '/Online',
      element: <LocationEvents location='Online'address = 'N/A' />
    },
    {
      path: '/Stanford',
      element: <LocationEvents location='Stanford University, CA'address = '450 Serra Mall, Stanford, CA 94305, USA'/>
    },
    {
      path: '/events',
      element: <Events />
    }
  ])

  return (
    <div className='app'>

      <header className='main-header'>
        <h1>HACKERS WORLD</h1>

        <div className='header-buttons'>
          <Link to='/' role='button'>Home</Link>
          <Link to='/events' role='button'>Events</Link>
        </div>
      </header>

      <main>
        {element}
      </main>
    </div>
  )
}

export default App