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

  // Estado para la validacion de los errores
  const [errores,setErrores] = useState({
    nombre:false,
    apellido:false,
    contraseña:false,
    email:false,
  });

  //funcion obtener el valor de los input
  const handleChange = (e) => {
    const {name,value} = e.target;
    setNuevoUsuario({...nuevoUsuario,[name]:value});
  };

  //funcion al hacer click en el btn del formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // sacamos las funciones por defecto



    const nuevosErrores = { // hacemos un objeto booleano, para verificar que el usuario ingrese texto e imail para poder setear la lista de usuarios
      nombre: nuevoUsuario.nombre === '',
      apellido: nuevoUsuario.apellido === '',
      contraseña: nuevoUsuario.contraseña === '',
      email: nuevoUsuario.email === '' || !nuevoUsuario.email.includes('@'),
    };

    if(Object.values(nuevosErrores).includes(true)){ // si algun valor de alguna propiedad del objeto nuevoErrores, es = "true"...
      setErrores({...errores, ...nuevosErrores}) // seteamos el estado errores, copiando el valor de errores con los d enuevoserrores.
   
    }else{ // si todo son false, es decir, que hay datos en los imput, y hay un imail valido, se procede a setear la listadeUsuarios
      setErrores({...errores, ...nuevosErrores});
      setListaUsuarios([...listaUsuarios , nuevoUsuario]);
      setNuevoUsuario({ // volvemos en blanco el formulario
        nombre:'',
        apellido:'',
        contraseña:'',
        email:'',
      })
    };
  };

  const mensajeError = (campo) =>{ 
    if(errores[campo]){
      return(
        <p>
          Por favor, ingrese su {campo}
        </p>
      )
    }else{
      return null;
    }
  };




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


