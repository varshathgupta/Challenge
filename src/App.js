
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function App() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const[list,setList]=useState([])
  const[title,setTitle]= useState('')
  const[image,setImage]=useState(null)
  const[des,setDecs]=useState('')
  const[hash,setHash]=useState('')

  const onImageChange = (e) => {
    const [file] = e.target.files;
    setImage(URL.createObjectURL(file));
  };
  
  const adding=(e)=>{
    e.preventDefault();
    setList([
      ...list,
      {
        id: list.length,
        title: title,
        image:image,
        des:des,
        hash,hash
      }
    ]);
    setTitle("")
    setImage(null)
    setDecs("")
    setHash("")
    setShow(false)
}

const deleteCard= (index) => {
    
    setList(list.splice(index+1,4))
  };

console.log(list)
//   let addObj =


  return (
    <Container>
    <Button className="mt-5 mb-5" variant="primary" onClick={handleShow}>
        Upload Image
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Page for uploading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Title of the image</Form.Label>
              <Form.Control type="text" placeholder="Title " 
              value={title}
               onChange={(e)=>setTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Upload Image</Form.Label>
              <Form.Control type="file"  onChange={onImageChange} />
            </Form.Group>
            <Form.Group
              className="mb-3"
              
            >
              <Form.Label>Descrbition</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Say few words" value={des} onChange={(e)=>setDecs(e.target.value)}/>
            </Form.Group>
            <Form.Group
              className="mb-3"
              
            >
              <Form.Label>Hashtag</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Enter with #" value={hash}  onChange={(e)=> setHash(e.target.value)}/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={adding}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
     <div className='className="mt-5 mb-5 "'>
        <Row>
      {
        
        list.map((data,index)=>{
            return(
                
            <Card style={{ width: '18rem', margin:'10px' }} key={index}>
            <Card.Img variant="top" src={data.image} />
            <Card.Body>
                <Card.Title>{data.title}</Card.Title>
                <Card.Text>
                {data.des}
                </Card.Text>
                <Card.Text>
                {data.hash}
                </Card.Text>
                <Button variant="danger"  style={{ margin:'3px'}} onClick={(e)=>deleteCard(index)}>Delete</Button>
                <Button variant="primary" style={{ margin:'3px'}} onClick={handleShow}>Update</Button>
            </Card.Body>
            </Card>
            )

        })
      }
      </Row>
      </div>
      </Container>
      

 
  );
}
