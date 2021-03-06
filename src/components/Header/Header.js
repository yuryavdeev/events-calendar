import { useEffect, useState } from 'react'
import { Link, NavLink, useMatch } from 'react-router-dom'

import './Header.scss'


const Header = () => {
  const matchMainRoute = useMatch({ path: 'events-calendar/', end: true })
  const matchEventItemRoute = useMatch({ path: 'events-calendar/:id', end: true })
  const [activeMainRoute, setActiveMainRoute] = useState(false)


  useEffect(() => {
    matchMainRoute ?
      setActiveMainRoute(true)
      :
      matchEventItemRoute && matchEventItemRoute.params.id !== 'my-events' ?
        setActiveMainRoute(true)
        :
        setActiveMainRoute(false)
  }, [matchEventItemRoute, matchMainRoute])


  return (
    <div className='header'>
      <Link
        to='events-calendar/'
        className={`header__link ${activeMainRoute && 'header__link_active'}`}
      >
        Events
      </Link>

      {/* др. вариант активной ссылки -> */}
      <NavLink
        to='events-calendar/my-events'
        className={({ isActive }) =>
          isActive ? 'header__link header__link_active' : 'header__link'
        }
      >
        Calendar
      </NavLink>
    </div >
  )
}

export default Header
