"use client"
import React from 'react'
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function HomePage() {
  // Estado para almacenar el tamaño de la ventana
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  // Efecto para escuchar los cambios en el tamaño de la ventana
  useEffect(() => {
    const handleResize = () => {
      // Comprobamos si el ancho de la ventana es mayor a 1024px (escritorio)
      if (window.innerWidth >= 600) {
        setIsLargeScreen(true);  // Pantalla grande (escritorio)
      } else {
        setIsLargeScreen(false);  // Pantalla pequeña (móvil/tablet)
      }
    };

    // Añadir el event listener para el cambio de tamaño de la ventana
    window.addEventListener('resize', handleResize);

    // Llamamos a handleResize al cargar la página
    handleResize();

    // Limpiar el event listener cuando el componente se desmonte
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      {/* Mostrar la imagen dependiendo del tamaño de la pantalla */}
      {isLargeScreen ? (
        <Image
          src="/image1.jpg" // Imagen para pantallas grandes
          alt="Imagen para pantallas grandes"
          width={2000}
          height={2000}
          className='img-contenedor'
          />
      ) : (
        <Image
          src="/image-movil.jpeg" // Imagen para pantallas pequeñas
          alt="Imagen para pantallas pequeñas"
          width={1024}
          height={576}
          className='img-movil'
          />
      )}
    </div>
  );
}
