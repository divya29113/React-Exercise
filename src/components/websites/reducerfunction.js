export function reducerfunction(state,action){

    switch(action.type){
        case "Increase count":
            return {...state ,count:state.count+1};

        case "login":
            return {...state,isLoggedIn:true};
        case "setTodos":
            return{...state,todos:action.payload}; 
        default:
            return state;    
    }

}