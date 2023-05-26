import React, { useEffect, useState } from 'react'
import { useParams,Link } from 'react-router-dom';
import { trabajos } from '../data/trabajos';

export const  Proyecto = () => {
  
    let params = useParams();
    const [proyecto,setProyecto] = useState({})

    useEffect(()=>{
            let proyecto = trabajos.filter( trabajo=> trabajo.id === params.id)
            console.log(proyecto);
            setProyecto(proyecto[0])
    },[params.id]);


    return (
    <div className='page'>  

      <section className='project'>

        <h1>Proyecto: {params.id}</h1>
        <h2 className='project--heading'>Título: {proyecto.nombre}</h2>
        <h3>Pagina web: <Link to='/portafolio'>{proyecto.url}</Link></h3>
        <h3>identificador del proyecto: {proyecto.id}</h3>
        <img className='project--img' src={proyecto.imagen} alt={proyecto.nombre} />
        <p> Tecnologias: {proyecto.tecnologias} 
        </p>

      </section>
    </div>
  )
}
