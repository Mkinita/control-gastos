import React from 'react'
import Gasto from './Gasto'

const ListadoGasto = ({gastos}) => {
  return (
    <div className='listado-gastos contenedor'>
        <h2>{gastos.length ? 'Gastos' :'No existen Gastos'}</h2>

        {gastos.map( gasto => (
            <Gasto
             Key={gasto.id}
             gasto ={gasto}
            />
        ))}
    </div>
  )
}

export default ListadoGasto