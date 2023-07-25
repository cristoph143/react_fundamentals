import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useState } from 'react'
import './App.css'
const Home = () => {
    // let name = 'Home';
    const [name, setName] = useState('mario')
    const [age, setAge] = useState(25)
    const [count, setCount] = useState(0)
    const handleClick = () => {
        console.log('hello ninjas', count, name);
        // name = 'luigi'
        setName('luigi')
        setAge(30)
        console.log('hello ninjas', count, name);
    }
    const handleClickAgain = (name: string) => {
        console.log('hello ' + name, count);
    }
    return (
        <>
        <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <p>{name} is {age} years old</p>
        <button onClick={handleClick}>Click Me!</button>
        <button onClick={handleClickAgain('Mario')}>Click Me Again!</button>
        <button onClick={() => {
            console.log('hello ninjas', count);
            handleClickAgain('Mario');
        }}>Click Me Again Direct!</button>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
        </>
    );
}

export default Home;