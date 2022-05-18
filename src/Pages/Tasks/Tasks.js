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
    return (
        <div>
            <div className='flex justify-around items-center'>
                <h2 className='text-2xl font-bold mt-7'>To-do List</h2>
                <label onClick={() => setIsModalOpen(true)} for="add-task-modal" class="btn btn-outline btn-success modal-button">Add Task</label>
            </div>
            <div class="overflow-x-auto flex items-center w-fit mt-8 mx-auto">
                <table class="table table-zebra w-full">
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
                                key={task._id}
                                task={task}
                                index={index}
                            ></Task>)
                        }

                    </tbody>
                </table>
            </div>

            {isModalOpen && <AddTask
                setTasks={setTasks}
                setIsModalOpen={setIsModalOpen}
            ></AddTask>}
        </div>
    );
};

export default Tasks;