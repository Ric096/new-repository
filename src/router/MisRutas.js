import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import {Inicio} from '../components/Inicio';
import { Contacto } from '../components/Contacto';
import { Curriculum } from '../components/Curriculum';
import { Portafolio } from '../components/Portafolio';
import { Servicios } from '../components/Servicios';
import { HeaderNav } from '../components/layout/HeaderNav';
import { Footer } from '../components/layout/Footer';
import { Error } from '../components/Error';
import { Proyecto } from '../components/Proyecto';

// En este componente configuramos las rutas de nuestra pagina web..
export const MisRutas = () => {
  return (
    
    //Etiqueta para definir la config. de rutas
    <BrowserRouter>
        {/* HEADER Y NAVEGACION */}
        <HeaderNav />

        {/* CONTENIDO */}
        <section className='content'>

          <Routes>
              <Route path='/' element={<Navigate to="/inicio"/>}/>
              <Route path='/inicio' element={<Inicio />}/>
              <Route path='/servicios' element={<Servicios />}/>
              <Route path='/portafolio' element={<Portafolio />}/>
              <Route path='/contacto' element={<Contacto />}/>
              <Route path='/curriculum' element={<Curriculum />}/>
              <Route path='/proyecto/:id' element={<Proyecto />}/>
              <Route path='*' element={<Error/>}/>
          </Routes>

        </section>

        {/* FOOTER */}
        <Footer />

    </BrowserRouter>
  )
}
