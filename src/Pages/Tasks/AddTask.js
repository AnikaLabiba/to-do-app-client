import React from 'react';

const AddTask = ({ setIsModalOpen, setTasks, tasks }) => {
    const handleAddTask = event => {
        event.preventDefault()
        const task = {
            name: event.target.name.value,
            description: event.target.description.value,
        }
        const newTaskArray = [...tasks, task]
        setTasks(newTaskArray)
        setIsModalOpen(false)
        console.log(tasks);
    }
    return (
        <div>
            <input type="checkbox" id="add-task-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="add-task-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className='text-xl text-center'>Add new task</h3>
                    <form onSubmit={handleAddTask}>
                        <input name='name' type="text" placeholder="Task Name" required class="input input-bordered w-full max-w-xs my-3" />
                        <input name='description' type="text" placeholder="Description" required class="input input-bordered input-lg w-full max-w-xs" />
                        <input type="submit" className="btn btn-info w-full mt-3 max-w-xs" value="Add" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddTask;