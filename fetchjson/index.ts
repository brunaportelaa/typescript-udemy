import axios from "axios";

const url = 'https://jsonplaceholder.typicode.com/todos/';

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

axios.get(url).then(response => {
    const todo = response.data;

    function logAllTasks() {

        todo.forEach((element: Todo) => {
            const id = element.id;
            const title = element.title;
            const completed = element.completed;
        
            console.log(`
                The to-do with id: ${id}
                has a title of: ${title}
                and a status of: ${ completed ? 'completed' : 'unfinished'}
                `)
            });
    }

    function logTodoById(id:number) {
        const task = todo[id- 1]
        console.log(`
            The to-do with id: ${task.id}
            has a title of: ${task.title}
            and a status of: ${ task.completed ? 'completed' : 'unfinished'}
        `)

    }

    function checkCompletedTasks(){
        const completed = todo.filter((element: Todo) => element.completed === true)
        console.log(`Out of ${todo.length} tasks, ${completed.length} are completed.`)
    }
    
    // logAllTasks();
    // checkCompletedTasks();
    logTodoById(99);

    
})

