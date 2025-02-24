"use client";
import React, { useEffect, useState } from "react";
import { useStore } from '@/app/lib/store'
import Link from "next/link";


function Page() {
  const [valor, setValor] = useState(null);
  const { counter, increment, reset } = useStore();


  useEffect(() => {
    const peticion = async () => {
      const result = await fetch("https://rickandmortyapi.com/api/character");
      const data = await result.json();
      setValor(data.results);
    };
    peticion();
  }, []);

  return (
    <div className="bg-gray-950 text-white h-screen flex justify-center items-center flex-col gap-5">
      <Link href="/juego" className="bg-green-600 text-white p-2">Ir juego</Link>
      <ul>
        {valor &&
          valor.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
      </ul>
      <div className="bg-gray-950 h-screen text-white flex justify-center items-center">
        <div style={{ padding: '20px', border: '1px solid #ccc', margin: '10px' }}>
          <h2>Contador: {counter}</h2>
          <button onClick={increment} style={{ marginRight: '5px' }}>
            Incrementar
          </button>
          <button onClick={reset}>
            Reiniciar
          </button>
        </div>
      </div>


    </div>
  );
}

export default Page;
