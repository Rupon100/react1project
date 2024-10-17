import './App.css'
import Btn from './Components/Btn'
import Dropdown from './Components/Dropdown'
import Input from './Components/Input'
import Todos from './Components/Todos'
import Toggle from './Components/Toggle'

function App() {
  

  return (
    <section className='main'>
      <h2>Reack Basic Project</h2> 
      <hr />
      <Btn></Btn>
      <hr />
      <Toggle></Toggle>
      <hr />
      <Input></Input>
      <hr />
      <Dropdown></Dropdown>
      <hr />
      <Todos></Todos>
    </section>
  )
}

export default App
