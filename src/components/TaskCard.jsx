import React from 'react';
import Tag from './Tag';
import "./TaskCard.css"
import deleteTcon from '../assets/delete.png'

const TaskCard = ({title, tags, handleDelete, index}) => {
  return (
    <article className='task_card'>
    <p className="task_text">{title}</p>
    <div className='task_card_bottom_line'>
      <div className="task_card_tags">
        {
          tags.map((tag, index) =>(
            <Tag key={index} tagname={tag} selected/>
          ))
        }
      </div>
      <div className='task_delete' onClick={() =>handleDelete(index)}> 
      <img src={deleteTcon} className='delete_icon' alt="delete" />
      </div>
    </div>
    </article>// we need to pass the index value in this handle delete function, otherwise our delete funcionality will not work
    //we pass the error function () =>handleDelete(index)
  )
}

export default TaskCard