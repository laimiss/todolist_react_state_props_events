import { useState } from 'react';

import TableForTasks from "./TableForTasks";
import FormForTask from "./FormForTask";


const ToDoMain = () => {
    //state turi buti virsuje
    //1. kintamasis, kuris saugoja state reiksme
    //2. metodas, kuris atnaujina state reiksme
    //3. state pradine reiksme

    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: "Clean you room",
            isCompleted: false
        },
        {
            id: 2,
            text: "Do your homework",
            isCompleted: true
        },
        {
            id: 3,
            text: "To go to cinema",
            isCompleted: false
        }
    ])
    const addToDo = (item) => {
        const tempList = [...tasks, { id: tasks.length + 1, text: item, isCompleted: false }]
        setTasks(tempList)
    }
    return (
        <>
            <TableForTasks tasks={tasks} />
            <FormForTask addToDo={addToDo} />
        </>
    )
}

export default ToDoMain

