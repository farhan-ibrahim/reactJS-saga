export const NAME = "TASK";

// TYPE NAME
export const GET_ALL = `${NAME}/GET_ALL`;
export const GET_ALL_SUCCESS = `${NAME}/GET_ALL_SUCCESS`;
export const GET_ALL_FAILED = `${NAME}/GET_ALL_FAILED`;


export const getTaskData = store => store[NAME].getAll
// Create action function
// pure function $ function function name = input => output 
// data is obtained from view
export const getAll = data => ({
    type: GET_ALL,
    data
});

export const getAllSuccess = data => ({
    type: GET_ALL_SUCCESS,
    data
});

export const getAllFailed = error => ({
    type: GET_ALL_FAILED,
    error
});

