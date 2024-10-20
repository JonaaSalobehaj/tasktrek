import React from 'react'
import Todo from "../assets/direct-hit.png"
import Tag from "./Tag"
import "./TaskColumn.css"
import TaskCard from './TaskCard'

const TaskColumn = ({title, icon, tasks, status, handleDelete}) => {
  return (
    <section className='task_column'>
      <h2 className="task_column_heading">
      <img className="task_column_icon" src={icon} alt='direct-hit'/>
      {title}
      </h2>

      {tasks.map(
        (task, index) => 
          task.status === status && <TaskCard 
        key={index} 
        title={task.title}
        tags={task.tags}
        handleDelete={handleDelete}
        index={index} //we need to pass indec equals to index becuase we need to pass that index in this handle delete function
        />
      )}
    </section>
  )
}

export default TaskColumn