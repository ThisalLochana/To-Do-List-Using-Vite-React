import {useState} from "react";

function ToDoList(){

    const [tasks, setTasks] = useState(["Eat the breakfast", "Sleep tonight", "Code the project"]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event){
        setNewTask(event.target.value);
    }

    function addTask(){
        if(newTask.trim() !== ""){
            setTasks((t) => [...t, newTask]);
            setNewTask("");
        }
    }

    function deleteTask(index){
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    function moveTaskUp(index){
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index){
        if(index < tasks.length -1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    return(
        <div className="to-do-list">
            <h1>To-Do-List</h1>
            <input type="text" value={newTask} onChange={handleInputChange} placeholder="Enter a task..." />
            <button onClick={addTask} className="add-button">Add</button>
            <ol>
                {tasks.map((task, index) => <li key={index}>
                    <span className="text">{task}</span>
                    <button onClick={() => deleteTask(index)} className="delete-button">Delete</button>
                    <button onClick={() => moveTaskUp(index)} className="move-button">⬆️</button>
                    <button onClick={() => moveTaskDown(index)} className="move-button">⬇️</button>
                    </li>)}
            </ol>
        </div>
    );
}

export default ToDoList;