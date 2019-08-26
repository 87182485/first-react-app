export function generateHashKey() {
    return [...Array(10)].map(i=>(~~(Math.random()*36)).toString(36)).join('')
}

export function sortTodo(todos) {
    if(!todos || todos.length<=1) {
        return todos;
    }

    return todos.slice().sort((a, b) => {
        if(a.completed === b.completed) {
            return a.createAt - b.createAt;
        }

        return a.completed - b.completed;
    });
}