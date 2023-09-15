import React from 'react';
import Button from 'react-bootstrap/Button';
import Form  from 'react-bootstrap/Form';
import { userSchema } from '../Validations/UserValidation';

function Register(){
 
    const createUser = async (event) => {
        event.preventDefault();
            let formData ={
                Username: event.target[0].value,
                email: event.target[1].value,
                password: event.target[2].value,
                city: event.target[3].value,
                Firstname: event.target[4].value,
                Lastname: event.target[5].value,
                Birthday: event.target[6].value,
                Age: event.target[7].value,
            };
            console.log (formData)
            const isValid = await userSchema.isValid(formData);
            console.log(isValid);
    };

   
    return (
     
       
    <Form onSubmit ={createUser}>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding:'50px' }}>

<div  style={{ margin:'10px'}}>
        
<Form.Group className="mb-3" controlId="Username">
        <Form.Control type="text" placeholder="Username" />
      </Form.Group>
   
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Enter email" />
        
      </Form.Group>

      
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="City">
        <Form.Control type="text" placeholder="City" />
      </Form.Group>


      
</div>

<div  style={{ margin:'10px'}}>
        <Form.Group className="mb-3" controlId="Firstname">
        <Form.Control type="text" placeholder="First Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="LastName">
        <Form.Control type="text" placeholder="LastName" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="Birthday">
        <Form.Control type="date" placeholder="Birthday" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="Age">
        <Form.Control type="number" placeholder="Age" />
      </Form.Group>
      </div>
    
      </div>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  
    );
}

export default Register;