import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({ product }) => {
  return (
    <div className='group relative cursor-pointer'>
      <Link to={`/products/${product?.id}`} className='block'>
        {/* Contenedor de Imagen con Máscara */}
        <div className='relative w-full aspect-h-1 aspect-w-1 overflow-hidden rounded-md bg-gray-800/50 lg:aspect-none lg:h-80 h-96 border border-gray-700/50 flex items-center justify-center'>
          
          {/* 1. Imagen con Zoom suave */}
          <img
            src={product?.image}
            alt={product?.name}
            className='h-full w-full object-cover object-center lg:h-full lg:w-full transition-transform duration-500 ease-out group-hover:scale-110'
          />

          {/* 2. Máscara de arriba a abajo en color gris claro */}
          <div className='absolute inset-0 bg-gray-300/25 pointer-events-none -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out' />
        </div>
      </Link>

      <div className='mt-4 flex justify-between items-start gap-2'>
        <div>
          <h3 className='text-sm text-foreground transition-colors duration-200 group-hover:text-cyan-400'>
            <Link to={`/products/${product?.id}`}>
              <span aria-hidden="true" className='inset-0'>{product?.name}</span>
            </Link>
          </h3>
        </div>
        <p className='text-sm font-medium text-foreground whitespace-nowrap'>
          ${product?.new_price}
        </p>
      </div>
    </div>
  )
}

export default Item