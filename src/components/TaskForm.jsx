import React, {useState} from 'react'
import Tag from './Tag';
import './TaskForm.css';

const TaskForm = ({setTasks}) => {
  const [taskData, setTaskData] = useState({
    title: "",
    status:"todo",
    tags: [],
  });

  const checkTag = (tag) =>{
    return taskData.tags.some((item) => item === tag)
  }

  const selectTag = (tag) =>{
    if(taskData.tags.some((item) => item === tag)) {
     const filterTag = taskData.tags.filter((item) => (item !== tag))
     setTaskData((prev)=> {
      return {...prev, tags: filterTag};
     })
    }else {
      setTaskData((prev) => {
        return {...prev, tags: [...prev.tags, tag]}
      })
    }
  };

  const handleChange = (e) =>{
    const {name, value} = e.target; //the name represents the name in object const[taskData, setTaskData] = useState ({})

    setTaskData(prev =>{
      return{...prev, [name]: value}
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault(); //will prevent from default behavior from reloading the page when sumbited smth
    console.log(taskData);
    setTasks((prev) => {
      return [...prev, taskData]
    });
    setTaskData({
      title: "",
      status:"todo",
      tags: [],
    }) // after you are done with displaying the task this set to deafualt for the user 
  };

  return (
    <header className = 'app_header'>
      <form onSubmit={handleSubmit}>
        <input 
        type="text" 
        name = "title"
        value={taskData.title}
        className="task_input" 
        placeholder='Enter your task'
        onChange ={handleChange} />
        <div className="task_form_bottom_line">
          <div>
            <Tag tagname="HTML" selectTag = {selectTag} selected={checkTag("HTML")}/>
            <Tag tagname="CSS" selectTag = {selectTag} selected={checkTag("CSS")}/>
            <Tag tagname="JavaScript" selectTag = {selectTag} selected={checkTag("JavaScript")}/>
            <Tag tagname="React" selectTag = {selectTag} selected={checkTag("React")}/>
            
          </div>

          <div>
            <select className="task_status"
            name = "status"
            value={taskData.status}
            onChange={handleChange}>
            <option value="todo">To Do</option>
            <option value="doing">Doing</option>
            <option value="done">Done</option>
            </select>
          
            <button type="submit" className='task_submit'>+Add Task</button>
          </div>
        </div>
      </form>
    </header>

  )
}

export default TaskForm;