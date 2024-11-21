import { useState } from 'react';
import './App.css'

 function App (){

  //Estado para el nuevo usuario
  const [nuevoUsuario,setNuevoUsuario] = useState({
    nombre:'',
    apellido:'',
    contraseña:'',
    email:'',
  });

  //Estado para la lista de Usuarios
  const [listaUsuarios,setListaUsuarios] = useState([]);

  const [errores,setErrores] = useState({
    nombre:false,
    apellido:false,
    contraseña:false,
    email:false,
  });

  const handleChange = (e) => {
    const {name,value} = e.target;
    setNuevoUsuario({...nuevoUsuario,[name]:value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nuevosErrores = {
      nombre: nuevoUsuario.nombre === '',
      apellido: nuevoUsuario.apellido === '',
      contraseña: nuevoUsuario.contraseña === '',
      email: nuevoUsuario.email === '' || !nuevoUsuario.email.includes('@'),
    };

    if(Object.values(nuevosErrores).includes(true)){
      setErrores({...errores, ...nuevosErrores})
    }else{
      setListaUsuarios([...listaUsuarios , nuevoUsuario]);
      setNuevoUsuario({
        nombre:'',
        apellido:'',
        contraseña:'',
        email:'',
      })
    };

  };

  const mensajeError = (campo) =>{
    if(errores[campo] == true){
      return(
        <p>
          Por favor, ingrese su {campo}
        </p>
      )
    }else{
      return null;
    }
  };

  console.log(errores)

  return(
   <>
   <form
   onSubmit={handleSubmit}
   >
    <input 
    type="text" 
    name='nombre'
    value={nuevoUsuario.nombre}
    placeholder='Nombre'
    onChange={handleChange}/>
    {mensajeError('nombre')}
    <input 
    type="text" 
    name='apellido'
    value={nuevoUsuario.apellido}
    placeholder='Apellido'
    onChange={handleChange}/>
    {mensajeError('apellido')}
    <input 
    type="password" 
    name='contraseña'
    value={nuevoUsuario.contraseña}
    placeholder='Contraseña'
    onChange={handleChange}/>
    {mensajeError('contraseña')}
    <input 
    type="text" 
    name='email'
    value={nuevoUsuario.email}
    placeholder='Email'
    onChange={handleChange}/>
    {mensajeError('email')}
    <button type='submit'>SUBMIT</button>
   </form>
   </>
  )

    
}
export default App


