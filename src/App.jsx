import { useState } from 'react'
import './App.css'
import Btn from './Components/Btn'
import Check from './Components/Checkbox'
import Dropdown from './Components/Dropdown'
import Input from './Components/Input'
import Timer from './Components/Timer'
import Todos from './Components/Todos'
import Toggle from './Components/Toggle'
import RandomJoke from './Components/RandomJoke'

function App() {
  
  const [darkMode, setDarkMode] = useState(false);

  return (
    <section className={darkMode ? 'darkMode' : 'lightMode'}>
      <div className='main'>
        <h2>Reack Basic Project</h2> 
        <button onClick={() => setDarkMode(!darkMode)}>
          {
            darkMode ? 'Turn Dark Mode' : 'Turn light Mode'
          }
        </button>
        <hr />
        <Btn></Btn>
        <hr />
        <Toggle></Toggle>
        <hr />
        <RandomJoke></RandomJoke>
        <hr />
        <Timer></Timer>
        <hr />
        <Check></Check>
        <hr />
        <Input></Input>
        <hr />
        <Dropdown></Dropdown>
        <hr />
        <Todos></Todos>
      </div>
    </section>
  )
}

export default App
