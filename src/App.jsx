import { useState } from 'react';
import './App.css'

function App (){

  const [nuevoUsuario,setNuevoUsuario] = useState({
    nombre:'',
    apellido:'',
    contraseña:'',
    email:'',
  });

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
      setErrores({...errores, ...nuevosErrores});
      setListaUsuarios([...listaUsuarios , nuevoUsuario]);
      setNuevoUsuario({ // volvemos en blanco el formulario
        nombre:'',
        apellido:'',
        contraseña:'',
        email:'',
      })
      Swal.fire({
        position: "top",
        icon: "success",
        title: `Gracias ${nuevoUsuario.nombre} ${nuevoUsuario.apellido} por registrarte!`,
        showConfirmButton: false,
        timer: 2500
      });
    };
  };

  const mensajeError = (campo) =>{ 
    let mensaje = '';

    if(errores[campo]){
      if(campo !== 'email'){
        mensaje = `Ingrese su ${campo}`
      }
      else if(campo === 'email'){
        if(!nuevoUsuario.email.includes('@')){
          mensaje = 'Ingrese un email valido'
        }
        if(!nuevoUsuario.email){
          mensaje = `Ingrese su ${campo}`
        }
      }
      return <p className='text-error'>{mensaje}</p>  
    }
    else return null
  }; 


  return(
   <>
   <section className='container'>
    <div className='container-left'>
      <h1>Learn to code by watching others</h1>
      <p className='text'>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable</p>
    </div>
    <div className='container-right'>
      <div className='container-textfree'>
      <p className='text'><span className='text-span'>Try it free 7 days </span>then $20/mo. thereafter</p>  
      </div>

    <form
    onSubmit={handleSubmit}
   >
    <input 
    className={errores.nombre ? 'active' : ''}
    type="text" 
    name='nombre'
    value={nuevoUsuario.nombre}
    placeholder='Nombre'
    onChange={handleChange}
    />
    {mensajeError('nombre')}
    <input
    className={errores.apellido ? 'active' : ''} 
    type="text" 
    name='apellido'
    value={nuevoUsuario.apellido}
    placeholder='Apellido'
    onChange={handleChange}
    />
    {mensajeError('apellido')}
    <input 
    className={errores.email ? 'active' : ''}
    type="text" 
    name='email'
    value={nuevoUsuario.email}
    placeholder={errores.email ? 'email@example/com' : 'Email'}
    onChange={handleChange}
    />
    {mensajeError('email')}
    <input 
    className={errores.contraseña ? 'active' : ''}
    type="password" 
    name='contraseña'
    value={nuevoUsuario.contraseña}
    placeholder='Contraseña'
    onChange={handleChange}
    />
    {mensajeError('contraseña')}
    <button
    className='btn'
     type='submit'>CLAIM YOUR FREE TRIAL</button>
    <p className='text-terms'>By clicking the button, you are agreeing to our <span className='text-span-terms'>Terms and Services</span></p>
    </form>     
    </div>
   </section>
   </>
  ) 
}
export default App


