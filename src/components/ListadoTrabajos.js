import React from 'react'
import { Link } from 'react-router-dom'
import { trabajos } from '../data/trabajos'

export const ListadoTrabajos = ({limite}) => {
  return (
    <section className='works'>
    {
      trabajos.slice(0,limite).map(trabajo => {
        return(
          <article className='portafolio-item' key={trabajo.id}>
            <h2><Link to={'/proyecto/'+ trabajo.id}>{trabajo.nombre}</Link></h2>
            <h3>{trabajo.tecnologias}</h3>
            <img src={trabajo.imagen} alt={trabajo.nombre} />
            <p>{trabajo.categorias}</p>
          </article>
        )
      })
    }
  </section>
  )
}
