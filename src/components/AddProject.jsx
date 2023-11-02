import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
function AddProject() {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
     <Button variant="success" onClick={handleShow}>
        Add Project
      </Button>

      <Modal 
      show={show}
       onHide={handleClose}
       backdrop="static"
       keyboard={false}
       size='lg'
       centered
       >
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="row">
                <div className="col-lg-6">
                   <label>
                     <input type="text" style={{display:'none'}} />
                     <img className='img-fluid' src="https://i0.wp.com/seds.org/wp-content/uploads/2020/03/placeholder.png?fit=1200%2C800&ssl=1" alt="project picture" />
                     </label>
                </div>
                <div className="col-lg-6">
                    <div className='mb-3'>
                        <input type="text" className="form-control" placeholder='Project Title' />
                    </div>
                    <div className='mb-3'>
                        <input type="text" className="form-control" placeholder='Language Used' />
                    </div>
                    <div className='mb-3'>
                        <input type="text" className="form-control" placeholder='Github Link' />
                    </div>
                    <div className='mb-3'>
                        <input type="text" className="form-control" placeholder='Website Link' />
                    </div>
                    <div className='mb-3'>
                        <input type="text" className="form-control" placeholder='Project Overview' />
                    </div>

                </div>
            </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="success" onClick={handleClose}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default AddProject