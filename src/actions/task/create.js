export const NAME = "TASK";

// TYPE NAME
export const CREATE = `${NAME}/CREATE`;
export const CREATE_SUCCESS = `${NAME}/CREATE_SUCCESS`;
export const CREATE_FAILED = `${NAME}/CREATE_FAILED`;


export const getCreateData = store => store[NAME].create
// Create action function
// pure function $ function function name = input => output 
// data is obtained from view
export const create = data => ({
    type: CREATE,
    data
});

export const createSuccess = data => ({
    type: CREATE_SUCCESS,
    data
});

export const createFailed = error => ({
    type: CREATE_FAILED,
    error
});