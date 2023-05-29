import { useRef } from "react"

const FormForTask = ({ addToDo }) => {
    const inputas = useRef()
    const handleSubmit = e => {
        e.preventDefault()
        if (!inputas.current.value) return

        addToDo(inputas.current.value)
        inputas.current.value = ""
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                ref={inputas}
                type="text"
                placeholder="Enter new task..."
            />
        </form>
    )
}

export default FormForTask
