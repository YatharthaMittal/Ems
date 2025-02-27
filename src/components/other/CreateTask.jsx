import React, { useState } from 'react'

const CreateTask = () => {

    
    const [taskTitle, settaskTitle] = useState('')
    const [taskDescription, settaskDescription] = useState('')
    const [taskDate, settaskDate] = useState('')
    const [assignTo, setassignTo] = useState('')
    const [category, setcategory] = useState('')

    const [newTask, setnewTask] = useState([])

    const submitHandler = (e)=>{
        e.preventDefault()
        setnewTask({taskTitle,taskDescription,taskDate,category,active: false, newTask: true, failed: false, completed: false})
        const data = JSON.parse(localStorage.getItem('employees'))
        data.forEach((elem)=>{
            if(assignTo == elem.firstName){
                elem.tasks.push(newTask)
            }
        })
        localStorage.setItem('employees',JSON.stringify(data))
        settaskTitle('')
        settaskDescription()
        settaskDate('')
        setassignTo('')
        setcategory('')
    }

    return (
        <form onSubmit={(e)=>{
            submitHandler(e)
        }} className='flex flex-wrap w-full items-start justify-between'>
            <div className='w-1/2'>
                <div>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                    <input 
                    value={taskTitle} 
                    onChange={(e)=>{settaskTitle(e.target.value)}}
                     type="text" placeholder='name'
                        className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' />
                </div>
                <div>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                    <input value={taskDate} 
                    onChange={(e)=>{settaskDate(e.target.value)}} type="date" name="" id=""
                        className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
                    />
                </div>
                <div>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
                    <input value={assignTo}
                    onChange={(e)=>{setassignTo(e.target.value)}}
                    type="text" placeholder="employee"
                        className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
                    />
                </div>
                <div>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                    <input value={category}
                    onChange={(e)=>{setcategory(e.target.value)}}
                    type="text" placeholder="designer"
                        className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
                    />
                </div>
            </div>

            <div className='w-2/5 flex flex-col items-start'>
                <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                <textarea value={taskDescription} onChange={(e)=>{settaskDescription(e.target.value)}} name="" placeholder='description' cols="30" rows="10"
                    className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400'></textarea>
                <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
            </div>

        </form>
    )
}

export default CreateTask