import React from 'react'
import { Link } from 'react-router-dom'
import { ListadoTrabajos } from './ListadoTrabajos'

export const Inicio = () => {
  return (
    <div className='home'>
      <h1>
        Hola, soy <strong>Ricardo Gimenez,</strong> desarrollador web junior autodidacta y actualmente me encuentro 
        estudiando cursos de React para conseguirme un trabajo y poder llegar a ser profesional.
      </h1>

      <h2>
        A pesar de llevar poco tiempo en este rubro cuento con bastantes conocimientos y te puedo ayudar con los trabajos que necesites, <Link to="/contacto">Contactame</Link>  
      </h2>

      <section className="last-works">

        <h2 className='heading'>Algunos de mis proyectos</h2>
        <p>Estos son algunos de mis trabajos como desarrollador</p>
        
        <div className='works'>
          <ListadoTrabajos limite="2"/>
        </div>
        
      </section> 


    </div>
  )
}
