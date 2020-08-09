import React, { Fragment } from 'react'
import { Container } from 'semantic-ui-react'
import NavBar from '../../features/nav/NavBar'
import EventDashboard from '../../features/events/eventDashboard/EventDashboard'

export default function App() {
  return (
    <Fragment>
      <NavBar />
      <Container className='main'>
        <EventDashboard />
      </Container>
    </Fragment>
  )
}
