import Actions from "../../actions";

const getDefaultState = () => ({
    isLoading: false,
    error: null,
    data: {},
});

function getCompleted (state, action) {

    if (typeof state === "undefined"){
        return getDefaultState();
    }
    
    switch(action.type){
        case Actions.GET_COMPLETED:
            return{
                isLoading: true,
                error: null,
                data: {}
            };
        case Actions.GET_COMPLETED_SUCCESS:
            return{
                isLoading: false,
                error: null,
                data: action.data,
            };
        case Actions.GET_COMPLETED_FAILED:
            return{
                isLoading:false,
                error:action.error,
                data: {},
            };      
        default:
            return getDefaultState()
    }
}

export default getCompleted;