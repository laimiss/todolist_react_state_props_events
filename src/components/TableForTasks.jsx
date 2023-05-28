
const TableForTasks = (propsai) => {
    return (
            <table>
                <thead>
                    <tr>
                        <th>Eil.nr</th>
                        <th>Pavadinimas</th>
                        <th>Ar atlikta</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        propsai.tasks.map(task => (
                            <tr key={task.id} className={task.isCompleted ? "done":"willdo"}>
                                <td>{task.id}</td>
                                <td>{task.text}</td>
                                <td>{task.isCompleted ? "Done" : "will do..."}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
    )
}

export default TableForTasks
