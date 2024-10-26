"use client"
import React from "react";
import { useState } from "react";
interface NewToDoFormProps {
    addTask: (newTask: string) => void;
}

const NewToDoForm: React.FC<NewToDoFormProps> = ({ addTask }) => {
    const [newTask, setNewTask] = useState<string>("");

    function newTaskHandler(e: React.FormEvent) {
        e.preventDefault();
        addTask(newTask);
        setNewTask("");
    }

    return (
        <form className="input-container" onSubmit={newTaskHandler}>
            <input type="text" name="newItem" id="newItem" value={newTask} onChange={(e) => {
                setNewTask(() => e.target.value);
            }}></input>
            <input type="submit" value="Add" className="btn add-btn"></input>
        </form>
    )
}

export default NewToDoForm;