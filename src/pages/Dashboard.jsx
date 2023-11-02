import React from 'react'
import Header from '../components/Header'
import { Col, Row } from 'react-bootstrap'
import MyProjects from '../components/MyProjects'
import Profile from '../components/Profile'

function Dashboard() {
  return (
    <>
      <Header insideDashboard/>
      <Row style={{marginTop:'100px'}} className='container-fluid'>
        <Col sm={12} md={8}>
        {/* my project */}
        <h1>Welcome <span className='text-danger'>User</span></h1>
        <MyProjects/>
        </Col>
        <Col sm={12} md={4}>
        {/* my profile */}
        <Profile/>
        </Col>
      </Row>
    </>
  )
}

export default Dashboard