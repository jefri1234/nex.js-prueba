"use client";
import React, { useEffect, useState } from "react";

function Page() {
  const [valor, setValor] = useState(null);

  useEffect(() => {
    const peticion = async () => {
      const result = await fetch("https://rickandmortyapi.com/api/character");
      const data = await result.json();
      setValor(data.results);
    };
    peticion();
  }, []);

  return (
    <div>
      <ul>
        {valor &&
          valor.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
      </ul>
    </div>
  );
}

export default Page;
