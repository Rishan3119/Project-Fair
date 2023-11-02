import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header({insideDashboard}) {
  return (
    <Navbar  className="bg-success position-fixed top-0 w-100">
        <Container>
          <Navbar.Brand >
          <Link to={'/'} style={{textDecoration:'none',color:'white'}} className='fw-bolder fs-3'><i className="fa-brands fa-stack-overflow fa-bounce"></i> Project Fair</Link>
          </Navbar.Brand>
          {
           insideDashboard && <div className="btn btn-linkms-auto text-danger fw-bolder fs-5">Logout <i className="fa-solid fa-arrow-right-from-bracket fa-beat-fade"></i></div>
            }
        </Container>
      </Navbar>
  )
}

export default Header