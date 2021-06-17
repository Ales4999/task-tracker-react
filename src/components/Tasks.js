import Task from './Task'

const Tasks = ({ tasks }) => { //Passsing the task from App
    return (
        <>
        {tasks.map((task) => ( //Looping through the map task
            <Task key={task.id} task={task}/> // Passing the task as a prop  
        ))}       
        </>
    )
}

export default Tasks