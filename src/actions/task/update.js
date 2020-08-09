export const NAME = "TASK";

// TYPE NAME
export const UPDATE = `${NAME}/UPDATE`;
export const UPDATE_SUCCESS = `${NAME}/UPDATE_SUCCESS`;
export const UPDATE_FAILED = `${NAME}/UPDATE_FAILED`;


export const getUpdateData = store => store[NAME].update
// Create action function
// pure function $ function function name = input => output 
// data is obtained from view
export const update = data => ({
    type: UPDATE,
    data
});

export const updateSuccess = data => ({
    type: UPDATE_SUCCESS,
    data
});

export const updateFailed = error => ({
    type: UPDATE_FAILED,
    error
});