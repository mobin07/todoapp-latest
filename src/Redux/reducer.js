import * as types from "./actiontype"

const initialState={
    todos:[],
    isLoading:false,
    isError:false,
}



const reducer=(state=initialState,action)=>{
    const {type,payload}=action;
    switch(type){
        case types.GET_TODO_LISTS_REQUEST:
            return {
                ...state,
                isLoading:true,
                isError:false,
            };
        case types.GET_TODO_LISTS_SUCCESS:
            return{
                ...state,
                todos:payload,
                isLoading:false,
                isError:false,
            };
        case types.GET_TODO_LISTS_FAILURE:
            return{
                ...state,
                isLoading:false,
                isError:true,
            }
            case types.ADD_TODO_LISTS_REQUEST:
                return{
                    ...state,
                    isLoading:true,
                    isError:true,
                }
                case types.ADD_TODO_LISTS_SUCCESS:
                    return{
                        ...state,
                        todos:payload,
                        isLoading:false,
                        isError:false,
                    };
                case types.ADD_TODO_LISTS_FAILURE:
                    return{
                        ...state,
                        isLoading:false,
                        isError:true,
                    };
                    case types.TOGGLE_TODO_LISTS_REQUEST:
                        return{
                            ...state,
                            isLoading:true,
                            isError:false,
                        }
                        case types.TOGGLE_TODO_LISTS_SUCCESS:
                        let newToggledTodos=state.todos.map((item)=>
                        item.id===payload.id? payload:item
                        );    
                        return{
                                ...state,
                                todos:newToggledTodos,
                                isLoading:false,
                                isError:false,
                            };
                        case types.TOGGLE_TODO_LISTS_FAILURE:
                            return{
                                ...state,
                                isLoading:false,
                                isError:true,
                            };
                            case types.REMOVE_TODO_LISTS_REQUEST:
                                return{
                                    ...state,
                                    isLoading:true,
                                    isError:false,
                                }
                                case types.REMOVE_TODO_LISTS_SUCCESS:
                                    return{
                                        ...state,
                                        todos:payload,
                                        isLoading:false,
                                        isError:false,
                                    };
                                case types.REMOVE_TODO_LISTS_FAILURE:
                                    return{
                                        ...state,
                                        isLoading:false,
                                        isError:true,
                                    };
        

        
        default:
            return state;
    }
}

export default reducer