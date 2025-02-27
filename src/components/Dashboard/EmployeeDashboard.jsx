import React from 'react'
import Header from '../other/Header'
import TaskListNumbmer from '../other/TaskListNumbmer'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = ({props}) => {
  return (
    <div className='p-10 bg-[#1C1C1C] h-full'>
      <h1>{props.id}</h1>
        <Header changeUser={props.changeUser} data={props.data}/>
        <TaskListNumbmer data={props.data}/>
        <TaskList data={props.data} />
    </div>
  )
}

export default EmployeeDashboard