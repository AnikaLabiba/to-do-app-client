import React from 'react';

const Task = ({ task, index, handleRemoveTask }) => {
    const { name, description } = task


    return (
        <tr>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{description}</td>
            <td>
                <button className='btn btn-xs'>Completed</button>
                <button onClick={() => handleRemoveTask(index)} className='btn btn-xs'>Remove</button>
            </td>
        </tr>
    );
};

export default Task;