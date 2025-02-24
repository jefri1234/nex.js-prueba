"use client"
import {useStore} from '@/app/lib/store'
import Link from 'next/link';

function Page() {

  const { counter, increment, reset } = useStore();

  return (
    <div className="bg-gray-950 h-screen text-white flex flex-col gap-5 justify-center items-center">
      <Link href="/categoria" className="bg-green-600 rounded-md text-white p-2">Ir categoria</Link>
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
  );
}

export default Page;
