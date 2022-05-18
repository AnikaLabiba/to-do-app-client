import React, { useEffect, useState } from 'react';
import AddTask from './AddTask';
import Task from './Task';

const Tasks = () => {
    const [tasks, setTasks] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false)
    useEffect(() => {
        fetch('tasks.json')
            .then(res => res.json())
            .then(data => setTasks(data))
    }, [])


    const handleRemoveTask = index => {

        const proceed = window.confirm('Do you want to remove the task?')
        if (proceed) {
            const newTaskArray = tasks.filter(task => task.index !== index)
            setTasks(newTaskArray)
            alert('Task removed')
        }
    }
    return (
        <div>
            <div className='flex justify-around items-center'>
                <h2 className='text-2xl font-bold mt-7'>To-do List</h2>
                <label onClick={() => setIsModalOpen(true)} htmlFor="add-task-modal" className="btn btn-outline btn-success modal-button">Add Task</label>
            </div>
            <div className="overflow-x-auto flex items-center w-10/12 mt-8 mx-auto">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            tasks.map((task, index) => <Task
                                key={index}
                                task={task}
                                index={index}
                                setTasks={setTasks}
                                handleRemoveTask={handleRemoveTask}
                            ></Task>)
                        }

                    </tbody>
                </table>
            </div>

            {isModalOpen && <AddTask
                tasks={tasks}
                setTasks={setTasks}
                setIsModalOpen={setIsModalOpen}
            ></AddTask>}
        </div>
    );
};

export default Tasks;