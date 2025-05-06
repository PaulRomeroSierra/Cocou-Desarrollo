let tasks = [];

export const getTasks = () => tasks;
export const addTask = (task) => tasks.push(task);
export const removeTask = (index) => tasks.splice(index, 1);
