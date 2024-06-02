import React,{useState} from 'react'; 
export default function TodoList(){
    const [tasks, setTasks]=useState(["eat","study","sleep","exercise"])
    const [newTask,setNewTask]=useState("")
    function handleInputChange(event){
       setNewTask(event.target.value)
    }
    function addTask(){
        if(newTask.trim()!==""){
      setTasks(t=>[...t,newTask]);
      setNewTask("");
        }
    }
    function deleteTask(index){
        const tasksAfterDeleted=tasks.filter((Element,i)=>i!==index);
        setTasks(tasksAfterDeleted);
    }
    function moveTaskUp(index){
       if(index>0){
    const updatedTasks=[...tasks];
    [updatedTasks[index],updatedTasks[index-1]]=
    [updatedTasks[index-1],updatedTasks[index]];
    setTasks(updatedTasks);
}
    }
    function moveTaskDown(index){
        if(index<tasks.length-1){
            const updatedTasks=[...tasks];
            [updatedTasks[index],updatedTasks[index+1]]=
            [updatedTasks[index+1],updatedTasks[index]];
            setTasks(updatedTasks);
        }
            }
    return(<>
    <div className='todoList'>
    <h1>Todo list</h1>
    <div>
        <input 
        type='text'
        placeholder='enter a todo list'
        value={newTask}  
        onChange={handleInputChange} 
        />
        <button className='add-button' onClick={addTask}>Add</button>
    </div>
    <ol>
       { tasks.map((task,index) => 
        <li key={index}><span className='text'>{task}</span>
        <button  className='delete-button' onClick={()=>deleteTask(index)}>delete</button>
       
        <button className='move-button' onClick={()=>moveTaskUp(index)}> &#x2B06;</button>
        <button className='move-button' onClick={()=>moveTaskDown(index)}> &#x2B07;</button>

        </li>
)}
    </ol>
    </div>
    </>);
}