"use client"

import Task from "./Task";

function TasksList({ tasks, moveup, movedown, deleteTask, doneHandler }) {

    return (
        <ul className="tasks">
            {tasks.length === 0 && "No tasks to do ..."}
            {
                tasks.map((task) => {
                    return (<Task {...task}
                        key={task.id}
                        moveup={moveup}
                        movedown={movedown}
                        deleteTask={deleteTask}
                        doneHandler={doneHandler} />)
                })}
        </ul>
    )
}

export default TasksList;