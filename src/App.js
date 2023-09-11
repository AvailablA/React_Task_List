import React from 'react';
import { useState } from 'react';
import './App.css'

const App = ()=>{
  const [taskName,setTaskName]= useState('');
  const taskNameList= (event)=> {
    setTaskName(event.target.value);
  }
  const [priority,setPriority] = useState('');
  const selectPriority = (event)=> {
    setPriority(event.target.value)
  }
  const [tasks,setTasks] = useState([]);//to store task
  const handleSubmit = (event)=> {
    event.preventDefault();
    if(taskName.trim() ===''&& priority==='' )//input condition
    {
      return(alert("Enter the Task name and Select your Priority"));
    }else if(taskName.trim() ===''){
      return(alert("Enter the Task name"));
    }else if( priority==='' ){
      return(alert("Select your Priority"));
    }
    const newTask = {
      name : taskName,
      priority: priority,
    };
    setTasks([...tasks,newTask]);
    setTaskName('');
    setPriority('');
  };

  return(
    <>
    <h1>Favourite TASK List</h1>
    <form onSubmit={handleSubmit}>
      <label>Task</label>
      <input
          type='text'
          placeholder='Enter Task name'
          value={taskName}
          onChange={taskNameList} 
      />
      <br/>
      <label>Priority</label>
      <br/>
      <select value={priority}
              onChange={selectPriority}
      >
        <option value="">Select Priority</option>
        <option value="High">High</option>
        <option value="Low">Low</option>
      </select>
      <br/>
      <input type="submit" 
            className='btn'
      />
    </form>
      <table>
        <thead>
          <tr>
            <th>Task</th>
            <th>Priority</th>
            <th>Favourite</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task,index)=>(
            <tr key={index}>
            <td>{task.name}</td>
            <td>{task.priority}</td>
            <td>Favourite</td>
          </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
export default App;