import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import app from "./firebase.init";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";

const auth = getAuth(app);

function App() {
  const [validated, setValidated] = useState(false);
  const [registered, setRegistered] = useState(false)
  const [error,setError] =useState()
const [email, setEmail] = useState('')
const [password,setPassword] =useState('')

  const handleEmailBlur = (event) => {
   setEmail(event.target.value);
  };
  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };
  const handleRegisterChange =event=>{
   setRegistered(event.target.checked)
  }
  const handleFormSubmit = (event) => {
    event.preventDefault();
    // console.log("form submitted", email);
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
 if(!/(?=.*[A-Z])/.test(password)){
  setError('Password should contain st least one upper case') 
  return
 }

    setValidated(true);
    setError('')
    if(registered){
      signInWithEmailAndPassword(auth, email, password)
      .then(result => {
        const user =result.user
        console.log(user)
      })
      .catch(error =>{
        console.error(error)
      })
    }
    else{
      createUserWithEmailAndPassword(auth,email,password)
      .then(result => {
        const user = result.user;
        console.log(user);
        setEmail('')
        setPassword('')
      })
      .catch(error =>{
        console.error(error)
        setError(error.message)
      })
    }
  
    event.preventDefault();
  };
  return (
    <div className="w-50 mx-auto mt-5">
      <h1 className="mb-4 text-primary ">Please {registered ? 'login': 'Register'}</h1>
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid password.
          </Form.Control.Feedback>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid password.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check onChange={handleRegisterChange} type="checkbox" label="Already Registered?" />
      
        </Form.Group>
        <p className="text-danger">{error}</p>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default App;
