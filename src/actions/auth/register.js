export const NAME = "AUTH";

// TYPE NAME
export const REGISTER = `${NAME}/REGISTER`;
export const REGISTER_SUCCESS = `${NAME}/REGISTER_SUCCESS`;
export const REGISTER_FAILED = `${NAME}/REGISTER_FAILED`;


// Create action function
// pure function $ function function name = input => output 
// data is obtained from view
export const register = data => ({
    type: REGISTER,
    data
});

export const registerSuccess = data => ({
    type: REGISTER_SUCCESS,
    data
});

export const registerFailed = error => ({
    type: REGISTER_FAILED,
    error
});

export const getRegisterData = store => store[NAME].register