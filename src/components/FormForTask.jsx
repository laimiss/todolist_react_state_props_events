import { useState } from "react"

const FormForTask = ({ addToDo }) => {
    const [newTask, setNewTask] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        if (!newTask) return

        addToDo(newTask)
        setNewTask('')
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter new task..."
                value={newTask}
                onChange={e => setNewTask(e.target.value)}
            />
        </form>
    )
}

export default FormForTask
