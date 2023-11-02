import React from 'react'
import { Col, Row } from 'react-bootstrap'
import titleImage from '../Assets/9-removebg-preview.png'
import ProjectCard from '../components/ProjectCard'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
     {/* landing section */}
        <div style={{width:'100%',height:'100vh',backgroundColor:'#90ee90'}} className='container-fluid rounded'>
            <Row className='align-items-center p-5'>
                <Col sm={12} md={6}>
                    <h1 style={{fontSize:'80px'}} className='fw-bolder text-light mb-5'><i className="fa-brands fa-stack-overflow fa-bounce me-2"></i>Project Fair</h1>
                    <p>One stop destination for all Software Development Projects. Where User can add and manage their projects. As well as access all projects available in our websites.... What are you waiting for!!!</p>
                    <Link to={'/login'} className='btn btn-warning'>Start to Explore <i className='fa-solid fa-right-long fa-beat ms-2'></i></Link>
                </Col>
                <Col sm={12} md={6}>
                    <img style={{marginTop:'100px'}} className='w-100 ' src={titleImage} alt="" />
                </Col>
            </Row>

        </div>  
     {/* all projects */}
        <div className="all-projects mt-5">
            <h1 className="text-center mb-5">Explore Our Projects</h1>
           <marquee scrollAmount={25}>
                <div className='d-flex justify-content-between'>
                    <div style={{width:'500px'}}>
                        <ProjectCard/>
                    </div>
                </div>
           </marquee>
           <div className="text-center"><Link to={'/projects'}>View More Projects</Link></div>
        </div>



    </>
  )
}

export default Home