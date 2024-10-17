import { useEffect, useState } from "react"
import Todo from "./Todo";



export default function Todos(){

    const [todos, setTodo] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(data => setTodo(data))
    } ,[])

    return(
        <div>
            <h3>Todos Length: {todos.filter(todo => todo.completed).length}</h3>
            {
                todos.map(todo => (
                    todo.completed && <Todo todo={todo}></Todo>
                  ))
            }
        </div>
    )
}


