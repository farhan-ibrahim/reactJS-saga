export const NAME = "TASK";

// TYPE NAME
export const GET_COMPLETED = `${NAME}/GET_COMPLETED`;
export const GET_COMPLETED_SUCCESS = `${NAME}/GET_COMPLETED_SUCCESS`;
export const GET_COMPLETED_FAILED = `${NAME}/GET_COMPLETED_FAILED`;


// Create action function
// pure function $ function function name = input => output 
// data is obtained from view
export const getCompleted = data => ({
    type: GET_COMPLETED,
    data
});

export const getCompletedSuccess = data => ({
    type: GET_COMPLETED_SUCCESS,
    data
});

export const getCompletedFailed = error => ({
    type: GET_COMPLETED_FAILED,
    error
});

export const getCompletedTaskData = store => store[NAME].getCompleted