import React from 'react'

export const Contacto = () => {
  return (
    <div className='page'>
    
      <h1>Contactame..</h1>

      <form className='form'> 
      
        <input type="text" placeholder='Nombre' />
        <input type="text" placeholder='Apellido ' />
        <input type="email" placeholder='Email' />
        <textarea placeholder='Motivo de consulta'></textarea>
        <input type="submit" vaulue="Enviar" />

      </form>


    </div>
  )
}
