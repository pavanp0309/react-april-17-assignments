function logTaskDetails(task){
    const {id, completed}=task;
    console.log("Task ID:",id);
    console.log("Completed:",completed)
}
const task={ id: 101, title: "JS assignment", completed: true};
logTaskDetails(task);