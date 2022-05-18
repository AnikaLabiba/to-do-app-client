import React from 'react';
import Task from './Task';

const Tasks = () => {
    const tasks = [
        {
            _id: 1,
            name: "Practice Javascript",
            description: "Practice Javascript es6 features and learn how Javascript works."
        },
        {
            _id: 2,
            name: "Practice Javascript",
            description: "Practice Javascript es6 features and learn how Javascript works."
        },
        {
            _id: 3,
            name: "Practice Javascript",
            description: "Practice Javascript es6 features and learn how Javascript works."
        },
    ]
    return (
        <div>
            <h2 className='text-2xl font-bold mt-7'>To-do List</h2>
            <div class="overflow-x-auto flex items-center w-3/4 mt-8 mx-auto">
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

        </div>
    );
};

export default Tasks;