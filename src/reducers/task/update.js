import Actions from "../../actions";

const getDefaultState = () => ({
    isLoading: false,
    error: null,
    data: {},
});

function update (state, action) {

    if (typeof state === "undefined"){
        return getDefaultState();
    }
    
    switch(action.type){
        case Actions.UDPATE:
            return{
                isLoading: true,
                error: null,
                data: {}
            };
        case Actions.UDPATE_SUCCESS:
            return{
                isLoading: false,
                error: null,
                data: action.data,
            };
        case Actions.UDPATE_FAILED:
            return{
                isLoading:false,
                error:action.error,
                data: {},
            };      
        default:
            return getDefaultState()
    }
}

export default update;