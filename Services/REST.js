const createTodo = async(body) => {
    const data= await fetch('https://fatfish.herokuapp.com/create', {
        method: "POST",
        body: JSON.stringify({ todo: body }),
        headers: {
            'Content-Type': 'application/json',
        }
    })
    return data;
};

const getTodo =  async(body) => {

    const data= await fetch('https://fatfish.herokuapp.com/get');
    const res= await data.json();
    return res;
};
const archiveTodo =  async(body) => {
    const data= await fetch('https://fatfish.herokuapp.com/delete', {
        method: "POST",
        body: JSON.stringify({ id: body }),
        headers: {
            'Content-Type': 'application/json',
        }
    })
    return data;
};

export {
    getTodo,
    createTodo,
    archiveTodo,
}