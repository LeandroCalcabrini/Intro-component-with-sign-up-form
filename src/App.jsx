import { useState } from 'react';
import './App.css'

function App() {

 const [data, setData] = useState({
  nombre:'',
  apellido:'',
  email:'',
  password:'',
 })
 
  return (
    <>
    <form action="">
      <div>
        <input 
        type="text"
        id='firstName'
        placeholder='First Name'
        name='firsName'
        value={data.firstName}/>
        <span></span>
      </div>
      <div>
        <input 
        type="text"
        id='lastName'
        placeholder='Last Name'
        name='lastName'
        value={data.lastName}/>
        <span></span>
      </div>
      <div>
        <input
        type="email"
        id='email' 
        placeholder='Email Adress'
        name='email'
        value={data.email}/>
        <span></span>
      </div>
      <div>
        <input 
        type="password"
        id='password'
        name='password'
        placeholder='Password' 
        value={data.password}/>
        <span></span>
      </div>

    <button>CLAIM FOR FREE TRAIL</button>
    <p>By clicking the button, you are agreeing yto our <span>Terms and Services</span></p>

    </form>
    </>
  )
}
export default App
