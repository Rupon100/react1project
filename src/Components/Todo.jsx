


export default function Todo(todo){
    const {id, title, completed} = todo.todo;
    return(
        <div className="todoBox">
            <h4>Id: {id}</h4>
            <h5>Title: {title}</h5>
            <p>Active: {completed ? 'Yes' : 'No'}</p>
        </div>
    )
}


