import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask'

function AdminDashboard(props) {
    return (
        <div className='p-5 bg-[#1c1c1c] mt-5 rounded'>
            <Header changeUser={props.changeUser} />
            <CreateTask/>
            <AllTask/>
        </div>
    )
}

export default AdminDashboard