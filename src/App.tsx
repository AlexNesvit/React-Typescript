import { useState } from 'react'
import './App.css'
import PokemonCard from './components/PokemonCard/PokemonCard.tsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <PokemonCard />
      </div>
      <h1>React Basics 02 - Pokédex</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count + is {count}
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
          count - is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      
    </>
  )
}

export default App
