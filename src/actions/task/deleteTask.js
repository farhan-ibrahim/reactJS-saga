export const NAME = "TASK";

// TYPE NAME
export const DELETE_TASK = `${NAME}/DELETE_TASK`;
export const DELETE_TASK_SUCCESS = `${NAME}/DELETE_TASK_SUCCESS`;
export const DELETE_TASK_FAILED = `${NAME}/DELETE_TASK_FAILED`;

export const getDeleteTaskData = store => store[NAME].deleteTask;

export const deleteTask = data => ({
    type: DELETE_TASK,
    data
});

export const deleteTaskSuccess = data => ({
    type: DELETE_TASK_SUCCESS,
    data
});

export const deleteTaskFailed = error => ({
    type: DELETE_TASK_FAILED,
    error
});